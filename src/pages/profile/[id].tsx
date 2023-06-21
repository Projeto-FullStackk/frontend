import { useEffect, useState } from "react";

import { Button, Card, ModalAdsCreate } from "@/components";
import { useAppContext, KarsProvider, useAuth } from "@/contexts";

import { cars } from "@/services/dataMock";
import { api } from "@/services/api";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { UserLogged } from "@/contexts/AuthContext";

interface ProfileProps {
  user: UserLogged;
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id;
  const response = await api.get<UserLogged>(`/user/${id}`);

  return { props: { user: response.data } };
};

const Profile: NextPage<ProfileProps> = ({ user }) => {
  const { handleOpenModal, open } = useAppContext();
  const [seller, setSeller] = useState(true);
  const { userLogged } = useAuth();

  useEffect(() => {
    const sellerOruser = () => {
      if (!userLogged) {
        setSeller(false);
      }
      if (userLogged?.id !== user.id) {
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
                <Button style="button-brand-outline" onClick={handleOpenModal}>
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
                return (
                  <Card
                    key={car.id}
                    carData={car}
                    initials={initials}
                    user={user}
                    type="seller"
                  />
                );
              }
              return (
                <Card
                  key={car.id}
                  carData={car}
                  initials={initials}
                  user={user}
                  type="user"
                />
              );
            })}
          </ul>
        </section>
      </main>

      {open && <ModalAdsCreate />}
    </KarsProvider>
  );
};

export default Profile;
