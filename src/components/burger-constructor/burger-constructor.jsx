import { OrderDetails } from "./order-details/order-details.jsx";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import { useMemo } from "react";

export const BurgerConstructor = (props) => {
  const orderListWithoutBuns = useMemo(() => {
    return props.orderList.filter((item) => item.type !== "bun");
  }, [props.orderList]);

  const costOfBuns = useMemo(() => {
    const constOfOneBun = props.orderList.find(
      (item) => item.name === "Краторная булка N-200i"
    ).price;

    return constOfOneBun * 2;
  }, [props.orderList]);

  const totalCost = useMemo(() => {
    return orderListWithoutBuns
      .map((item) => item.price)
      .reduce((sum, price) => sum + price, costOfBuns);
  }, [props.orderList, costOfBuns]);

  return (
    <div className={styles.container}>
      <OrderDetails orderDetailsList={orderListWithoutBuns} />

      <div className={`${styles.submit} pr-4`}>
        <div className="price">
          <span className="text text_type_digits-medium total mr-2">
            {totalCost}
          </span>
          <CurrencyIcon />
        </div>

        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

const burgerConstructorPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

BurgerConstructor.propTypes = {
  orderList: PropTypes.arrayOf(burgerConstructorPropTypes).isRequired,
};
