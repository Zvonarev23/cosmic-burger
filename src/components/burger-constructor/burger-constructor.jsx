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
import { OrderContext } from "../../services/order-context";

export const BurgerConstructor = () => {
  const { orderState } = useContext(OrderContext);
  const [isOpenOrderDetails, setIsOpenOrderDetails] = useState(false);

  const createOrder = () => {
    setIsOpenOrderDetails(true);
  };

  const closeOrderDetails = () => {
    setIsOpenOrderDetails(false);
  };

  const totalCost = useMemo(() => {
    if (orderState.bun) {
      return orderState.ingredients.reduce(
        (sum, item) => sum + item.price,
        orderState.bun.price * 2
      );
    } else {
      return orderState.ingredients.reduce((sum, item) => sum + item.price, 0);
    }
  }, [orderState]);

  return (
    <div className={styles.container}>
      <div className={`${styles.order} mb-10`}>
        {orderState.bun && (
          <div className="pl-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${orderState.bun.name} (верх)`}
              price={orderState.bun.price}
              thumbnail={orderState.bun.image}
            />
          </div>
        )}
        {orderState.ingredients.length !== 0 || orderState.bun ? (
          <ul
            className={
              orderState.ingredients.length > 5
                ? styles.wrapper_scroll
                : styles.wrapper
            }
          >
            {orderState.ingredients.map((item) => {
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
        ) : (
          <h2 className="text text_type_main-medium">Пусто</h2>
        )}
        {orderState.bun && (
          <div className="pl-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${orderState.bun.name} (низ)`}
              price={orderState.bun.price}
              thumbnail={orderState.bun.image}
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
