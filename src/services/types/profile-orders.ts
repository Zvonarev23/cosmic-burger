export type TWSOrdersResponse = {
  success: boolean;
  orders: TWSOrders[];
  total: number;
  totalToday: number;
};

export type TWSOrders = {
  ingredients: string[];
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
};
