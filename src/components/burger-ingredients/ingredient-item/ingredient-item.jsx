import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./ingredient-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { commonPropTypes } from "../../../utils/common-proptypes";
import { OrderContext } from "../../../services/order-context";
import { useContext } from "react";

export const IngredientItem = ({ item, openIngredientDetails }) => {
  const { orderDispatcher } = useContext(OrderContext);

  const handleCurrentIngredients = (e) => {
    if (e.currentTarget) {
      openIngredientDetails(item);
      orderDispatcher({ type: "add", payload: item });
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
  openIngredientDetails: PropTypes.func.isRequired,
};
