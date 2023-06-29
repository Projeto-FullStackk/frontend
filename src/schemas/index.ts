import {
  adsSchema,
  adsCreateSchema,
  adsRequestSchema,
  iAds,
  iAdsCreate,
  iAdsRequest,
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
import {
  CommentData,
  commentSchema,
  commentResponse,
  CommentResponse,
  CommentList,
  commentList,
} from "./comments";

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
  commentSchema,
  commentResponse,
  commentList,
};

export type {
  iAds,
  iAdsCreate,
  iAdsRequest,
  iCarData,
  LoginData,
  UserData,
  Car,
  UserEmail,
  UserResetPassword,
  UserAdress,
  UserUpdate,
  CommentData,
  CommentResponse,
  CommentList,
};
