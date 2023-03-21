import {
  Button,
  CurrencyIcon,
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { useContext, useMemo, useState } from "react";
import { Modal } from "../modal/modal.jsx";
import { OrderDetails } from "./order-details/order-details.jsx";
import { IngredientsContext } from "../../services/ingredientsContext.js";

export const BurgerConstructor = () => {
  const { ingredients } = useContext(IngredientsContext);
  const [isOpenOrderDetails, setIsOpenOrderDetails] = useState(false);

  const createOrder = () => {
    setIsOpenOrderDetails(true);
  };

  const closeOrderDetails = () => {
    setIsOpenOrderDetails(false);
  };

  const bun = useMemo(() => {
    return ingredients.find((item) => item.type === "bun");
  }, [ingredients]);

  const orderListWithoutBuns = useMemo(() => {
    return ingredients.filter((item) => item.type !== "bun");
  }, [ingredients]);

  const totalCost = useMemo(() => {
    return orderListWithoutBuns.reduce(
      (sum, item) => sum + item.price,
      bun.price * 2
    );
  }, [ingredients]);

  return (
    <div className={styles.container}>
      <div className={`${styles.order} mb-10`}>
        <div className="pl-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={`${styles.wrapper} custom-scroll pt-4 pb-4 pr-2`}>
          {orderListWithoutBuns.map((item) => {
            return (
              <li className={styles.item} key={item._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}
                />
              </li>
            );
          })}
        </ul>
        <div className="pl-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>

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
