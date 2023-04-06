import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../modal/modal.jsx";
import { OrderDetails } from "./order-details/order-details.jsx";
import { useDrop } from "react-dnd";
import {
  addIngredient,
  setBuns,
} from "../../services/actions/burger-constructor";
import { BurgerConstructorItem } from "./burger-constructor/burger-constructor-item";

export const BurgerConstructor = () => {
  const orderIngredients = useSelector((state) => state.burgerConstructor);
  const [isOpenOrderDetails, setIsOpenOrderDetails] = useState(false);
  const dispatch = useDispatch();
  const [, dropIngredientsRef] = useDrop({
    accept: "ingredients",
    drop(item) {
      item.type === "bun"
        ? dispatch(setBuns(item))
        : dispatch(addIngredient(item));
    },
  });

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
      <div ref={dropIngredientsRef} className={`${styles.order} mb-10`}>
        {orderIngredients.bun ? (
          <div className="mb-4 pr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${orderIngredients.bun.name} (верх)`}
              price={orderIngredients.bun.price}
              thumbnail={orderIngredients.bun.image}
            />
          </div>
        ) : (
          <div
            className={`${styles.placeholder_top} mr-4 mb-4 text text_type_main-default`}
          >
            <span>Выберите булку</span>
          </div>
        )}

        <ul
          className={
            orderIngredients.ingredients.length > 5
              ? styles.wrapper_scroll
              : styles.wrapper
          }
        >
          {orderIngredients.ingredients.length !== 0 ? (
            orderIngredients.ingredients.map((item, index) => {
              return (
                <BurgerConstructorItem
                  key={item.id}
                  item={item}
                  index={index}
                />
              );
            })
          ) : (
            <li
              className={`${styles.placeholder_middle} text text_type_main-default`}
            >
              <span>Выберите начинку</span>
            </li>
          )}
        </ul>

        {orderIngredients.bun ? (
          <div className="pr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${orderIngredients.bun.name} (низ)`}
              price={orderIngredients.bun.price}
              thumbnail={orderIngredients.bun.image}
            />
          </div>
        ) : (
          <div
            className={`${styles.placeholder_bottom} mr-4 text text_type_main-default`}
          >
            <span>Выберите булку</span>
          </div>
        )}
      </div>

      <div className={`${styles.submit} mr-4`}>
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
