import orderCreatedImage from "../../../images/order-created.svg";
import styles from "./order-details.module.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { orderRequest } from "../../../services/actions/order-details";

export const OrderDetails = ({ setIsOpenOrderDetails }) => {
  const { isError, isLoading, orderNumber } = useSelector(
    (state) => state.orderDetails
  );

  const orderState = useSelector((state) => state.burgerConstructor);

  const dispatch = useDispatch();

  const bunId = orderState.bun._id;
  const ingredientsId = orderState.ingredients.map(
    (ingredient) => ingredient._id
  );
  const order = { ingredients: [bunId, ...ingredientsId, bunId] };

  useEffect(() => {
    dispatch(orderRequest(order));
    setIsOpenOrderDetails(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.heading_wrapper} mb-8`}>
        {isLoading && (
          <h2 className="text text_type_main-medium">Загрузка...</h2>
        )}

        {!isLoading && isError && (
          <h2 className="text text_type_main-medium">Ошибка...</h2>
        )}

        {!isLoading && !isError && (
          <h2 className={`${styles.heading} text text_type_digits-large`}>
            {orderNumber}
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
