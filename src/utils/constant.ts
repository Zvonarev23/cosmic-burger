export const WS_ALL_ORDERS_URL = "wss:/norma.nomoreparties.space/orders/all";
export const WS_PROFILE_ORDERS_URL = "wss:/norma.nomoreparties.space/orders";

export const ROUTES: {
  HOME: string;
  LOGIN: string;
  REGISTER: string;
  FORGOT_PASSWORD: string;
  RESET_PASSWORD: string;
  ORDER_FEED: string;
  PROFILE: string;
  ORDERS: string;
  INGREDIENT: string;
} = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  ORDER_FEED: "/order-feed",
  PROFILE: "/profile",
  ORDERS: "orders",
  INGREDIENT: "/ingredient/:_id",
};
