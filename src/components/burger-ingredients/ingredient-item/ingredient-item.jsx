import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { commonPropTypes } from "../../../utils/common-proptypes";
import { useDispatch, useSelector } from "react-redux";
import { setIngredientsDetails } from "../../../services/actions/ingredient-details";
import {
  addIngredient,
  setBuns,
} from "../../../services/actions/burger-constructor";
import { useDrag } from "react-dnd";
import { useMemo } from "react";

export const IngredientItem = ({ item }) => {
  const constructorIngredients = useSelector(
    (state) => state.burgerConstructor
  );

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredients",
    item: item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const dispatch = useDispatch();

  const counterIngredients = useMemo(() => {
    const { bun, ingredients } = constructorIngredients;
    let allIngredients = [];

    if (bun) {
      allIngredients = [...ingredients, bun, bun];
    } else {
      allIngredients = ingredients;
    }

    const counter = allIngredients.reduce(
      (acc, ingredient) => (ingredient._id === item._id ? acc + 1 : acc),
      0
    );

    return counter;
  }, [constructorIngredients]);

  const handleCurrentIngredients = (e) => {
    if (e.currentTarget) {
      dispatch(setIngredientsDetails(item));
      item.type === "bun"
        ? dispatch(setBuns(item))
        : dispatch(addIngredient(item));
    }
  };

  return (
    <li
      style={{ opacity }}
      ref={dragRef}
      className={styles.card}
      role={"menuitem"}
      onClick={handleCurrentIngredients}
      onKeyDown={handleCurrentIngredients}
    >
      {counterIngredients > 0 && (
        <Counter count={counterIngredients} size="default" />
      )}
      <img className="mb-1" src={item.image} alt={item.name} />
      <div className={`${styles.price} mb-1`}>
        <span className="text text_type_digits-default mr-2">{item.price}</span>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-default">{item.name}</p>
    </li>
  );
};

IngredientItem.propTypes = {
  item: commonPropTypes.isRequired,
};
