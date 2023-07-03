import axios from "axios";

/* https://kenzie-kars.herokuapp.com/ */

export const apiExternal = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 5000,
});

export const api = axios.create({
  baseURL: "https://motor-shop-m6.onrender.com/",
  timeout: 5000,
});
