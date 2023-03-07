import { IngredientItem } from "../ingredient-item/ingredient-item.jsx";
import PropTypes from "prop-types";
import styles from "./ingredients-group.module.css";

export const IngrediensGroup = (props) => {
  return (
    <div className="mb-10">
      <h2 className="text text_type_main-medium mb-6">{props.type}</h2>

      <ul className={`${styles.list} pl-4 pr-4`}>
        {props.ingredientsType.map((item) => {
          return (
            <IngredientItem
              image={item.image}
              name={item.name}
              price={item.price}
              key={item._id}
            />
          );
        })}
      </ul>
    </div>
  );
};

const ingredientsTypePropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

IngrediensGroup.propTypes = {
  ingredientsType: PropTypes.arrayOf(ingredientsTypePropTypes).isRequired,
  type: PropTypes.string.isRequired,
};
