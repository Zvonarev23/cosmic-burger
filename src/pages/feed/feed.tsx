import { useEffect } from "react";
import styles from "./feed.module.css";
import { useDispatch } from "../../hooks/useDispatch";
import {
  profileOrdersWsConnectionClosed,
  profileOrdersWsConnectionStart,
} from "../../services/actions/profile-orders";
import { WS_PROFILE_ORDERS_URL } from "../../utils/constant";
import { useSelector } from "../../hooks/useSelector";
import { OrderCard } from "../../components/order-card/order-card";

export const FeedPage = () => {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(
    (state) => state.profileOrders
  );

  const accessToken = localStorage.getItem("accessToken");

  const token = accessToken?.replace("Bearer ", "");

  const completedOrders = orders
    .filter((item) => item.status === "done")
    .map((item) => item.number);

  const pendingOrders = orders
    .filter((item) => item.status === "pending")
    .map((item) => item.number);

  useEffect(() => {
    dispatch(profileOrdersWsConnectionStart(WS_PROFILE_ORDERS_URL));

    return () => {
      dispatch(profileOrdersWsConnectionClosed());
    };
  }, []);

  const allOrders = orders.map((item) => item);

  if (orders.length === 0) {
    return <h1>Загрузка</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.feed_container}>
        <div className={styles.feed}>
          <h1 className="text text_type_main-large mb-5">Лента заказов</h1>

          {allOrders.map((order) => {
            return <OrderCard key={order.number} order={order} />;
          })}
        </div>

        <div className={styles.statistics_container}>
          <div className={styles.order_status}>
            <div className={styles.done}>
              <p className="text text_type_main-medium mb-6">Готовы:</p>
              <ul className={styles.done_list}>
                {completedOrders.map((status, index) => (
                  <li className="text text_type_digits-default" key={index}>
                    {status}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.pending}>
              <p className="text text_type_main-medium mb-6">В работе:</p>
              <ul className={styles.pending_list}>
                {pendingOrders.map((status, index) => (
                  <li className="text text_type_digits-default" key={index}>
                    {status}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.total}>
            <p className="text text_type_main-medium">
              Выполнено за все время:
            </p>
            <span className="text text_type_digits-large">{total}</span>
          </div>
          <div className={styles.today}>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <span className="text text_type_digits-large">{totalToday}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
