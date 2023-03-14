import { SelectedIngredients } from "./selected-ingredients/selected-ingredients.jsx";
import { commonPropTypes } from "../../utils/commonPropTypes.js";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import { useCallback, useMemo, useState } from "react";
import { Modal } from "../modal/modal.jsx";
import { OrderDetails } from "./order-details/order-details.jsx";

export const BurgerConstructor = ({ orderList }) => {
  const [isOpenOrderDetails, setIsOpenOrderDetails] = useState(false);

  const createOrder = useCallback(() => {
    setIsOpenOrderDetails(true);
  });

  const closeOrderDetails = useCallback(() => {
    setIsOpenOrderDetails(false);
  });

  const orderListWithoutBuns = useMemo(() => {
    return orderList.filter((item) => item.type !== "bun");
  }, [orderList]);

  const costOfBuns = useMemo(() => {
    const constOfOneBun = orderList.find(
      (item) => item.name === "Краторная булка N-200i"
    ).price;

    return constOfOneBun * 2;
  }, [orderList]);

  const totalCost = useMemo(() => {
    return orderListWithoutBuns
      .map((item) => item.price)
      .reduce((sum, price) => sum + price, costOfBuns);
  }, [orderList, costOfBuns]);

  return (
    <div className={styles.container}>
      <SelectedIngredients orderDetailsList={orderListWithoutBuns} />

      <div className={`${styles.submit} pr-4`}>
        <div className="price">
          <span className="text text_type_digits-medium total mr-2">
            {totalCost}
          </span>
          <CurrencyIcon />
        </div>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={createOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {isOpenOrderDetails && (
        <Modal onClose={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

BurgerConstructor.propTypes = {
  orderList: PropTypes.arrayOf(commonPropTypes.isRequired).isRequired,
};
