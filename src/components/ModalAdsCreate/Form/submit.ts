import { useKarsContext } from "@/contexts";
import { iAdsCreate, iAdsRequest } from "@/schemas";

const submit = (formData: iAdsCreate) => {
  let data: iAdsRequest = {} as iAdsRequest;

  for (let i = 0; i < 6; i++) {
    const image = formData.images[i]?.url ?? null;

    switch (i) {
      case 0:
        data["firstImage"] = image;
        break;

      case 1:
        data["secondImage"] = image;
        break;

      case 2:
        data["thirdImage"] = image;
        break;

      case 3:
        data["fourthImage"] = image;
        break;

      case 4:
        data["fifthImage"] = image;
        break;

      case 5:
        data["sixImage"] = image;
        break;
    }
  }

  data = {
    ...data,
    userId: "asdf-asdf-asdf-asdf", // Posteriormente implementar a lógica do campo de userId
    published: false,
    brand: formData.brand.toLowerCase(),
    color: formData.color,
    coverImage: formData.coverImage,
    description: formData.description,
    fuel: formData.fuel,
    km: formData.km,
    name: formData.name,
    price: formData.price,
    pricetf: formData.pricetf,
    year: formData.year,
  };
};

export default submit;
