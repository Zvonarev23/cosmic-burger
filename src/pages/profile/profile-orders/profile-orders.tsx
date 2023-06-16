import { useEffect } from "react";
import { OrderCard } from "../../../components/order-card/order-card";
import { useDispatch } from "../../../hooks/useDispatch";
import { useSelector } from "../../../hooks/useSelector";
import styles from "./profile-order.module.css";
import { WS_PROFILE_ORDERS_URL } from "../../../utils/constant";
import {
  profileOrdersWsConnectionClosed,
  profileOrdersWsConnectionStart,
} from "../../../services/actions/profile-orders";
import { Link } from "react-router-dom";
import { Preloader } from "../../../components/preloader/preloader";

export const ProfileOrders = (): JSX.Element => {
  const dispatch = useDispatch();
  const { orders, wsConnected, error } = useSelector(
    (state) => state.profileOrders
  );
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

  if (orders.length === 0 && !wsConnected) {
    return (
      <div className={styles.container}>
        <Preloader />
      </div>
    );
  }

  if (orders.length === 0 && error) {
    return (
      <div className={styles.container}>
        <h1>Упс... кажется такого заказа больше нет</h1>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {allOrders.map((order) => {
        return (
          <li key={order.number}>
            <Link
              className={styles.link}
              to={`/profile/orders/${order.number}`}
            >
              <OrderCard order={order} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
