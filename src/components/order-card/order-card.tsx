import { useSelector } from "../../hooks/useSelector";
import styles from "./order-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientImage } from "../ingredient-image/ingredient-image";

import React from "react";

type Torder = {
  order: {
    ingredients: string[];
    _id: string;
    status: string;
    name: string;
    number: number;
    createdAt: string;
    updatedAt: string;
  };
};

const OrderCard = ({ order }: Torder): JSX.Element => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const orderIngredients = order.ingredients.map((ingredientId) => {
    return ingredients.find((item) => item._id === ingredientId);
  });

  const orderPrice = orderIngredients.reduce(
    (acc, item) => (item ? acc + item.price : 0),
    0
  );

  const numberOfVisibleIngredients =
    order.ingredients.length > 6 ? 6 : order.ingredients.length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className="text text_type_digits-default">{`#${order.number}`}</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order.createdAt)}
        />
      </div>

      <p className="text text_type_main-medium mb-2">{order.name}</p>

      <p
        className={
          order.status === "done" ? styles.status_done : styles.status_default
        }
      >
        {order.status}
      </p>

      <div className={styles.footer}>
        <ul className={styles.list}>
          {orderIngredients
            .slice(0, numberOfVisibleIngredients)
            .map((item, index) => {
              return (
                <li
                  style={{
                    zIndex: Math.abs(index - numberOfVisibleIngredients),
                  }}
                  className={styles.item}
                  key={index}
                >
                  {item && (
                    <IngredientImage name={item.name} image={item.image} />
                  )}
                </li>
              );
            })}
          {order.ingredients.length > 6 && (
            <div className={styles.counter}>{`+${
              order.ingredients.length - 6
            }`}</div>
          )}
        </ul>

        <div className={styles.price}>
          <span className="text text_type_digits-default">{orderPrice}</span>

          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderCard);
