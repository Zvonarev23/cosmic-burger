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

export type TGetIngredientsResponse = {
  success: boolean;
  data: TIngredient[];
};

export type TGetOrder = {
  id: string;
  ingredients: string[];
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: string;
};

export type TGetOrderResponse = {
  success: boolean;
  orders: [TGetOrder];
};

export type TSendOrderResponse = {
  name: string;
  order: {
    createdAt: string;
    ingredients: TIngredient[];
    name: string;
    number: number;
    owner: {
      name: string;
      email: string;
      createdAt: string;
    };
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
  };
  success: boolean;
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
