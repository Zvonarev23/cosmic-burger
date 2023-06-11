export const WS_ALL_ORDERS_URL = "wss:/norma.nomoreparties.space/orders/all";
export const WS_PROFILE_ORDERS_URL = "wss:/norma.nomoreparties.space/orders";

export const ROUTES: {
  HOME: string;
  LOGIN: string;
  REGISTER: string;
  FORGOT_PASSWORD: string;
  RESET_PASSWORD: string;
  FEED: string;
  FEED_ORDERS: string;
  PROFILE: string;
  PROFILE_ORDERS: string;
  ORDERS: string;
  INGREDIENT: string;
} = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  FEED: "/feed",
  FEED_ORDERS: "/feed/:number",
  PROFILE: "/profile",
  PROFILE_ORDERS: "/profile/orders/:number",
  ORDERS: "orders",
  INGREDIENT: "/ingredient/:_id",
};
