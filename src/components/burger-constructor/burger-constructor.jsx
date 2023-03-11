import { OrderDetails } from "./order-details/order-details.jsx";
import { commonPropTypes } from "../../utils/commonPropTypes.js";
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

BurgerConstructor.propTypes = {
  orderList: PropTypes.arrayOf(commonPropTypes.isRequired).isRequired,
};
