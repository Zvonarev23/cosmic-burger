import { OrderCard } from "../../../components/order-card/order-card";
import styles from "./profile-order.module.css";

export const ProfileOrders = (): JSX.Element => {
  const socketResponse = {
    success: true,
    orders: [
      {
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa094a",
          "643d69a5c3f7b9001cfa0949",
          "643d69a5c3f7b9001cfa0946",
        ],
        _id: "5",
        name: "Death Star Starship бургер",
        status: "Создан",
        number: 453213,
        createdAt: "2023-06-01T10:43:22.587Z",
        updatedAt: "2021-06-23T14:43:22.603Z",
      },
      {
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa094a",
          "643d69a5c3f7b9001cfa0949",
          "643d69a5c3f7b9001cfa0945",
        ],
        _id: "2",
        name: "Supernova Infinity бургер",
        status: "Принят",
        number: 250213,
        createdAt: "2023-06-01T13:43:22.587Z",
        updatedAt: "2021-06-23T14:43:22.603Z",
      },
      {
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa094a",
          "643d69a5c3f7b9001cfa0949",
          "643d69a5c3f7b9001cfa0945",
        ],
        _id: "3",
        name: "Black Hole Singularity острый бургер",
        status: "В работе",
        number: 556613,
        createdAt: "2023-06-01T14:00:22.587Z",
        updatedAt: "2021-06-23T14:43:22.603Z",
      },
      {
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa0945",
        ],
        _id: "1",
        name: "Death Star Starship бургер",
        status: "Создан",
        number: 193213,
        createdAt: "2023-06-02T14:43:22.587Z",
        updatedAt: "2021-06-23T14:43:22.603Z",
      },
    ],
    total: 1,
    totalToday: 1,
  };

  const allOrders = socketResponse.orders.map((item) => item);

  return (
    <div className={styles.container}>
      {allOrders.map((order) => {
        return <OrderCard key={order._id} order={order} />;
      })}
    </div>
  );
};
