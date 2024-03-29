import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";
import { DragPreviewImage, useDrag } from "react-dnd";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { TIngredient } from "../../../utils/types";
import { useSelector } from "../../../hooks/useSelector";

type TIngredientItem = {
  item: TIngredient;
};

export const IngredientItem = ({ item }: TIngredientItem): JSX.Element => {
  const constructorIngredients = useSelector(
    (state) => state.burgerConstructor
  );

  const [{ opacity }, dragRef, preview] = useDrag({
    type: "ingredients",
    item: item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const location = useLocation();

  const counterIngredients = useMemo(() => {
    const { bun, ingredients } = constructorIngredients;
    let allIngredients = [];

    if (bun) {
      allIngredients = [...ingredients, bun, bun];
    } else {
      allIngredients = ingredients;
    }

    const counter = allIngredients.reduce(
      (acc: number, ingredient: TIngredient) =>
        ingredient._id === item._id ? acc + 1 : acc,
      0
    );

    return counter;
  }, [constructorIngredients, item._id]);

  return (
    <>
      <DragPreviewImage connect={preview} src={item.image} />
      <li style={{ opacity }} ref={dragRef} className={styles.card}>
        <Link
          data-testid={item.name}
          className={styles.link}
          to={`/ingredient/${item._id}`}
          state={{ backgroundLocation: location }}
        >
          {counterIngredients > 0 && (
            <Counter count={counterIngredients} size="default" />
          )}
          <img className="mb-1" src={item.image} alt={item.name} />
          <div className={`${styles.price} mb-1`}>
            <span className="text text_type_digits-default mr-2">
              {item.price}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <p className="text text_type_main-default">{item.name}</p>
        </Link>
      </li>
    </>
  );
};
