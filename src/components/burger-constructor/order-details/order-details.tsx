import orderCreatedImage from "../../../images/order-created.svg";
import styles from "./order-details.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderRequest } from "../../../services/actions/order-details";
import { Preloader } from "../../preloader/preloader";
import { TIngredient } from "../../../utils/types";

type TOrderDetails = {
  setIsOpenOrderDetails: (value: React.SetStateAction<boolean>) => void;
};

export const OrderDetails = ({
  setIsOpenOrderDetails,
}: TOrderDetails): JSX.Element => {
  const { isError, isLoading, orderNumber } = useSelector(
    //@ts-ignore
    (state) => state.orderDetails
  );
  //@ts-ignore
  const orderState = useSelector((state) => state.burgerConstructor);

  const dispatch = useDispatch();

  const bunId = orderState.bun._id;
  const ingredientsId = orderState.ingredients.map(
    (ingredient: TIngredient) => ingredient._id
  );
  const order = { ingredients: [bunId, ...ingredientsId, bunId] };

  useEffect(() => {
    //@ts-ignore
    dispatch(orderRequest(order));
    setIsOpenOrderDetails(true);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <Preloader />}

      {!isLoading && isError && (
        <h2 className="text text_type_main-medium">Ошибка...</h2>
      )}

      {!isLoading && !isError && (
        <>
          <div className={`${styles.heading_wrapper} mb-8`}>
            <h2 className={`${styles.heading} text text_type_digits-large`}>
              {orderNumber}
            </h2>
          </div>

          <p className="text text_type_main-medium mb-15">
            идентификатор заказа
          </p>

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
        </>
      )}
    </div>
  );
};
