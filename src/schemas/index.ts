import {
  adsSchema,
  adsCreateSchema,
  adsRequestSchema,
  iAds,
  iAdsCreate,
  iAdsRequest,
  iAdsUpdate,
} from "./ads";
import { iCarData } from "./apiExternal";
import {
  LoginData,
  UserData,
  UserEmail,
  UserResetPassword,
  loginSchema,
  userSchema,
  userEmailSchema,
  userResetPasswordSchema,
  userAdressSchema,
  userUpdateSchema,
  UserAdress,
  UserUpdate,
} from "./users";
import { Car } from "./cars";

export {
  adsSchema,
  adsCreateSchema,
  adsRequestSchema,
  loginSchema,
  userSchema,
  userEmailSchema,
  userResetPasswordSchema,
  userAdressSchema,
  userUpdateSchema,
};

export type {
  iAds,
  iAdsCreate,
  iAdsRequest,
  iCarData,
  iAdsUpdate,
  LoginData,
  UserData,
  Car,
  UserEmail,
  UserResetPassword,
  UserAdress,
  UserUpdate,
};
