import orderCreatedImage from "../../../images/order-created.svg";
import styles from "./order-details.module.css";

export const OrderDetails = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.heading_wrapper} mb-8`}>
        <h2 className={`${styles.heading} text text_type_digits-large`}>
          034536
        </h2>
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
