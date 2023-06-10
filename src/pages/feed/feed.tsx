import { useEffect } from "react";
import styles from "./feed.module.css";
import { useDispatch } from "../../hooks/useDispatch";
import { WS_ALL_ORDERS_URL } from "../../utils/constant";
import { useSelector } from "../../hooks/useSelector";
import { OrderCard } from "../../components/order-card/order-card";
import {
  feedWsConnectionClosed,
  feedWsConnectionStart,
} from "../../services/actions/feed";
import { Link } from "react-router-dom";

export const FeedPage = () => {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector((state) => state.feed);

  const completedOrders = orders
    .filter((item) => item.status === "done")
    .map((item) => item.number)
    .slice(0, 20);

  const pendingOrders = orders
    .filter((item) => item.status === "peinding")
    .map((item) => item.number);

  useEffect(() => {
    dispatch(feedWsConnectionStart(WS_ALL_ORDERS_URL));

    return () => {
      dispatch(feedWsConnectionClosed());
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

          <ul className={styles.list_cards}>
            {allOrders.map((order) => {
              return (
                <li key={order.number}>
                  <Link className={styles.link} to={`/feed/${order.number}`}>
                    <OrderCard order={order} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className={styles.order_status}>
            <div>
              <p className="text text_type_main-medium mb-6">Готовы:</p>
              <ul className={styles.list}>
                {completedOrders.map((status, index) => (
                  <li className={styles.status_done} key={index}>
                    {status}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text text_type_main-medium mb-6">В работе:</p>
              <ul className={styles.list}>
                {pendingOrders.map((status, index) => (
                  <li className={styles.status_pending} key={index}>
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
            <span className={styles.digits}>{total}</span>
          </div>
          <div className={styles.today}>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <span className={styles.digits}>{totalToday}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
