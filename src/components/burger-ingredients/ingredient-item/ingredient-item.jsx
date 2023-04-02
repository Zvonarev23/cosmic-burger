import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { commonPropTypes } from "../../../utils/common-proptypes";
import { useDispatch } from "react-redux";
import { setIngredientsDetails } from "../../../services/actions/ingredient-details";
import { addIngredient } from "../../../services/actions/burger-constructor";

export const IngredientItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleCurrentIngredients = (e) => {
    if (e.currentTarget) {
      dispatch(setIngredientsDetails(item));
      dispatch(addIngredient(item));
    }
  };

  return (
    <li
      className={styles.card}
      role={"menuitem"}
      onClick={handleCurrentIngredients}
      onKeyDown={handleCurrentIngredients}
    >
      <Counter count={1} size="default" />
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
