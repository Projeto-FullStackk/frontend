import { iAdsUpdate } from "@/schemas";

const refineBodySubmit = (formData: iAdsUpdate): iAdsUpdate => {
  let data: iAdsUpdate = {} as iAdsUpdate;

  for (let i = 0; i < 6; i++) {
    const image = formData.images![i]?.url ?? null;

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
        data["sixthImage"] = image;
        break;
    }
  }
  delete formData.images;
  data = {
    ...formData,
    ...data,
  };

  return data;
};

export default refineBodySubmit;
