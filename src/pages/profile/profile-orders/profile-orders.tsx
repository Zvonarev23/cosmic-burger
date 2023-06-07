import { useEffect } from "react";
import { OrderCard } from "../../../components/order-card/order-card";
import { useDispatch } from "../../../hooks/useDispatch";
import { useSelector } from "../../../hooks/useSelector";
import styles from "./profile-order.module.css";
import {
  profileOrdersWsConnectionClosed,
  profileOrdersWsConnectionStart,
} from "../../../services/actions/profile-orders";
import { WS_PROFILE_ORDERS_URL } from "../../../utils/constant";

export const ProfileOrders = (): JSX.Element => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.profileOrders.orders);
  const token = localStorage.getItem("accessToken")?.replace("Bearer ", "");

  useEffect(() => {
    dispatch(
      profileOrdersWsConnectionStart(`${WS_PROFILE_ORDERS_URL}?token=${token}`)
    );

    return () => {
      dispatch(profileOrdersWsConnectionClosed());
    };
  }, []);

  const allOrders = orders.map((item) => item);

  return (
    <div className={styles.container}>
      {allOrders.map((order) => {
        return <OrderCard key={order.number} order={order} />;
      })}
    </div>
  );
};
