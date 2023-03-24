import orderCreatedImage from "../../../images/order-created.svg";
import styles from "./order-details.module.css";
import { OrderContext } from "../../../services/orderContext";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const OrderDetails = ({ setIsOpenOrderDetails }) => {
  const { orderState } = useContext(OrderContext);
  const [sendOrderState, setSendOrderState] = useState({
    isError: false,
    isLoaded: false,
    orderNumber: 0,
  });

  const bunId = orderState.bun._id;
  const ingredientsId = orderState.ingredients.map(
    (ingredient) => ingredient._id
  );
  const order = { ingredients: [bunId, ...ingredientsId, bunId] };

  useEffect(() => {
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.status);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setSendOrderState({
          ...sendOrderState,
          orderNumber: data.order.number,
          isLoaded: true,
        });
      })
      .catch(() => {
        setSendOrderState({
          ...sendOrderState,
          isError: true,
          isLoaded: true,
        });
      })
      .finally(setIsOpenOrderDetails(true));
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.heading_wrapper} mb-8`}>
        {!sendOrderState.isLoaded && (
          <h2 className="text text_type_main-medium">Загрузка...</h2>
        )}

        {sendOrderState.isError && (
          <h2 className="text text_type_main-medium">Ошибка...</h2>
        )}

        {sendOrderState.isLoaded && !sendOrderState.isError && (
          <h2 className={`${styles.heading} text text_type_digits-large`}>
            {sendOrderState.orderNumber}
          </h2>
        )}
      </div>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <div className="mb-15">
        <img
          className={styles.image}
          src={orderCreatedImage}
          alt="Начали готовить"
        />
      </div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  setIsOpenOrderDetails: PropTypes.func.isRequired,
};
