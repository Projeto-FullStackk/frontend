import { fontInter } from "@/styles/font";

interface iNoContent {
  message: string;
}

const NoContent = ({ message }: iNoContent) => {
  return (
    <div
      className={`${fontInter.className} font-semibold flex mb-3 bg-brand-4 justify-center p-7 rounded border-dashed border-brand-3 border-4`}
    >
      <h2>{message}</h2>
    </div>
  );
};

export default NoContent;
