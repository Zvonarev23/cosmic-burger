import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./ingredient-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientItem = (props) => {
  return (
    <li className={styles.card}>
      <Counter count={1} size="default" />
      <img className="mb-1" src={props.image} alt={props.name} />
      <div className={`${styles.price} mb-1`}>
        <span className="text text_type_digits-default mr-2">
          {props.price}
        </span>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-default">{props.name}</p>
    </li>
  );
};

IngredientItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
