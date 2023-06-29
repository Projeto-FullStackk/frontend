import { iAds } from "@/schemas";

type iProductImageProps = Pick<iAds, "coverImage">;

const ProductImage = ({ coverImage }: iProductImageProps) => {
  return (
    <figure className="w-full h-[355px] bg-gray-10 rounded">
      <img
        src={coverImage}
        alt="Car image"
        className="w-full h-full object-contain"
      />
    </figure>
  )
}

export default ProductImage;
