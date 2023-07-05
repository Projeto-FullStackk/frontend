import Image from "next/image";

interface iCardCoverImageProps {
  coverImage: string
}

const CardCoverImage = ({ coverImage }: iCardCoverImageProps) => {
  return (
    <figure className="relative bg-gray-7 h-[9.5rem] mb-4 flex justify-center items-center border-2 group-hover:border-brand-1 ">
      <Image
        src={coverImage}
        alt="Cover image car"
        width={1280}
        height={720}
        className="w-full h-full object-cover"
      />
    </figure>
  )
}

export default CardCoverImage;
