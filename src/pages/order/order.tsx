import { useEffect } from "react";
import { OrderInfo } from "../../components/order-info/order-info";
import styles from "./order.module.css";
import {
  clearOrderState,
  getOrderRequest,
} from "../../services/actions/order-details";
import { useParams } from "react-router-dom";
import { useSelector } from "../../hooks/useSelector";
import { Preloader } from "../../components/preloader/preloader";
import { useDispatch } from "../../hooks/useDispatch";

export const OrderPage = (): JSX.Element => {
  const { order, getRequest, getError } = useSelector(
    (state) => state.orderDetails
  );
  const dispatch = useDispatch();
  const { number } = useParams();

  useEffect(() => {
    if (number) dispatch(getOrderRequest(number));

    return () => {
      dispatch(clearOrderState());
    };
  }, []);

  return (
    <div className={styles.container}>
      {getRequest && !order && <Preloader />}
      {getError && <h1>Упс... кажется такого заказа больше нет</h1>}
      {order && !getError && <OrderInfo order={order} />}
    </div>
  );
};
