import {
  Button,
  CurrencyIcon,
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../modal/modal.jsx";
import { OrderDetails } from "./order-details/order-details.jsx";
import { v4 as uuidv4 } from "uuid";

export const BurgerConstructor = () => {
  const orderIngredients = useSelector((state) => state.burgerConstructor);
  const [isOpenOrderDetails, setIsOpenOrderDetails] = useState(false);

  const createOrder = () => {
    setIsOpenOrderDetails(true);
  };

  const closeOrderDetails = () => {
    setIsOpenOrderDetails(false);
  };

  const totalCost = useMemo(() => {
    if (orderIngredients.bun) {
      return orderIngredients.ingredients.reduce(
        (sum, item) => sum + item.price,
        orderIngredients.bun.price * 2
      );
    } else {
      return orderIngredients.ingredients.reduce(
        (sum, item) => sum + item.price,
        0
      );
    }
  }, [orderIngredients]);

  return (
    <div className={styles.container}>
      <div className={`${styles.order} mb-10`}>
        {orderIngredients.bun && (
          <div className="pl-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${orderIngredients.bun.name} (верх)`}
              price={orderIngredients.bun.price}
              thumbnail={orderIngredients.bun.image}
            />
          </div>
        )}
        {orderIngredients.ingredients.length !== 0 || orderIngredients.bun ? (
          <ul
            className={
              orderIngredients.ingredients.length > 5
                ? styles.wrapper_scroll
                : styles.wrapper
            }
          >
            {orderIngredients.ingredients.map((item) => {
              return (
                <li className={styles.item} key={uuidv4()}>
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
        ) : (
          <h2 className="text text_type_main-medium">Пусто</h2>
        )}
        {orderIngredients.bun && (
          <div className="pl-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${orderIngredients.bun.name} (низ)`}
              price={orderIngredients.bun.price}
              thumbnail={orderIngredients.bun.image}
            />
          </div>
        )}
      </div>

      <div className={`${styles.submit} pr-4`}>
        <div className="price">
          <span className="text text_type_digits-medium total mr-2">
            {totalCost}
          </span>
          <CurrencyIcon />
        </div>

        <Button
          disabled={orderIngredients.bun ? false : true}
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
          <OrderDetails setIsOpenOrderDetails={setIsOpenOrderDetails} />
        </Modal>
      )}
    </div>
  );
};
