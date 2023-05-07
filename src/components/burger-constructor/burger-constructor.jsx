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
  clearIngredients,
  setBuns,
} from "../../services/actions/burger-constructor";
import { BurgerConstructorItem } from "./burger-constructor/burger-constructor-item";

export const BurgerConstructor = () => {
  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);

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
    dispatch(clearIngredients());
    setIsOpenOrderDetails(false);
  };

  const totalCost = useMemo(() => {
    const costOfBuns = bun ? bun.price * 2 : 0;

    return ingredients.reduce(
      (sum, ingredient) => sum + ingredient.price,
      costOfBuns
    );
  }, [bun, ingredients]);

  return (
    <div className={styles.container}>
      <div ref={dropIngredientsRef} className={`${styles.order} mb-10`}>
        {bun ? (
          <div className="mb-4 pr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
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
            ingredients.length > 5 ? styles.wrapper_scroll : styles.wrapper
          }
        >
          {ingredients.length !== 0 ? (
            ingredients.map((item, index) => {
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

        {bun ? (
          <div className="pr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
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
          disabled={bun ? false : true}
          htmlType="button"
          type="primary"
          size="large"
          onClick={createOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {isOpenOrderDetails && (
        <Modal onCloseModal={closeOrderDetails}>
          <OrderDetails setIsOpenOrderDetails={setIsOpenOrderDetails} />
        </Modal>
      )}
    </div>
  );
};
