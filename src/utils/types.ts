export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TBurgerConstructorItem = TIngredient & { id: string };

export type TSendOrder = {
  name: string;
  number: number;
};

export type TAuthResult = {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
};

export type TMessage = {
  success: boolean;
  message: string;
};

export type TUser = {
  name: string;
  email: string;
  password: string;
  token: string;
};

export type TOrder = {
  ingredients: string[];
};
