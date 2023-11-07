export enum API_Routs {}

export enum APP_Routs {
  SIGNUP = "/signup",
  PRODUCTS = "/products",
  CART = "/cart",
  LOGIN = "/login",
}

export const DEFAULT_DELIVERY_CHARGES = 40;

export const sizes = ["S", "M", "L", "XL", "XXL"];
export const sortPriceRanges = [
  {
    text: "under 999",
    value: "0-999",
  },
  {
    text: "Rs. 999 - Rs. 1,499",
    value: "999-1499",
  },
  {
    text: "1,499 - Rs. 1,999",
    value: "1499-1999",
  },
  {
    text: "Above Rs. 1,999",
    value: "1999",
  },
];
