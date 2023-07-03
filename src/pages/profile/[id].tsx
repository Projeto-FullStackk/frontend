import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import {
  useAppContext,
  KarsProvider,
  useAuth,
  useKarsContext,
} from "@/contexts";
import { UserLogged } from "@/contexts/AuthContext";
import { Button, Card, ModalAdsCreate } from "@/components";
import { api } from "@/services/api";
import ModalAdsEdit from "@/components/ModalAdsEdit";

interface ProfileProps {
  user: UserLogged;
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id;
  const response = await api.get<UserLogged>(`/user/${id}`);

  return { props: { user: response.data } };
};

const Profile: NextPage<ProfileProps> = ({ user }) => {
  const { handleOpenModal, open, modalType, setModalType } = useAppContext();
  const { ads, setAds } = useKarsContext();
  const [seller, setSeller] = useState(false);
  const { userLogged } = useAuth();

  useEffect(() => {
    const sellerOruser = () => {
      const isUserSeller = user.isSeller;
      const isSameId = userLogged?.id === user.id;
      if (isUserSeller && isSameId) {
        setSeller(true);
      } else {
        setSeller(false);
      }
    };
    sellerOruser();
  }, [user, userLogged]);

  let initials = "";
  if (user.name) {
    const names = user.name.split(" ");
    initials = names[0][0] + names[1][0];
  }

  return (
    <KarsProvider>
      {open && modalType === "adsCreate" ? <ModalAdsCreate /> : null}
      {open && modalType === "adsEdit" ? <ModalAdsEdit /> : null}
      <main className="bg-gray-8">
        <div className="bg-brand-1 h-[15.313rem] mb-40 flex flex-col justify-center items-center lg:flex-row lg:gap-10">
          <section className="px-3 mt-[16.6875rem] flex w-full justify-center">
            <div className="w-[95%] max-w-5xl bg-gray-10 rounded p-5 md:p-10 flex flex-col gap-5 justify-center items-start">
              <h2 className="rounded-[9.375rem] h-[4rem] w-[4rem] mt-4 bg-random-4 text-white flex items-center justify-center">
                {initials}
              </h2>
              <div className="flex items-center gap-4">
                <h3 className="text-gray-1 font-semibold text-[1.1rem] font-lex">
                  {user.name}
                </h3>
                <span className="px-3 py-2 text-brand-1 font-medium text-sm rounded bg-brand-4">
                  Anunciante
                </span>
              </div>
              <p className="font-inter text-base text-gray-2">
                {user.description}
              </p>
              {seller ? (
                <Button
                  style="button-brand-outline"
                  onClick={() => {
                    handleOpenModal();
                    setModalType("adsCreate");
                  }}
                >
                  Criar Anúncio
                </Button>
              ) : null}
            </div>
          </section>
        </div>
        <section className="max-w-7xl m-auto py-[90px] flex flex-col gap-16">
          {seller ? null : (
            <h1 className=" px-4 lg:px-0 text-2xl font-semibold lg:px-6">
              Anúncios
            </h1>
          )}
          <ul className="list-none w-full h-fit px-5 flex overflow-x-auto lg:grid lg:grid-cols-3 lg:max-w-[1429px] lg:justify-items-center xl:grid-cols-4  gap-8 pb-10">
            {user.ads.map((car) => {
              if (seller) {
                return <Card key={car.id} carData={car} type="seller" />;
              }
              return <Card key={car.id} carData={car} type="user" />;
            })}
          </ul>
        </section>
      </main>
    </KarsProvider>
  );
};

export default Profile;
