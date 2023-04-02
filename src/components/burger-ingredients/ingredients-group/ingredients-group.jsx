import { IngredientItem } from "../ingredient-item/ingredient-item.jsx";
import PropTypes from "prop-types";
import styles from "./ingredients-group.module.css";
import { commonPropTypes } from "../../../utils/common-proptypes.js";

export const IngrediensGroup = ({ ingredientsType, type }) => {
  return (
    <div className="mb-10">
      <h2 className="text text_type_main-medium mb-6">{type}</h2>

      <ul className={`${styles.list} pl-4 pr-4`}>
        {ingredientsType.map((item) => {
          return <IngredientItem item={item} key={item._id} />;
        })}
      </ul>
    </div>
  );
};

IngrediensGroup.propTypes = {
  ingredientsType: PropTypes.arrayOf(commonPropTypes.isRequired).isRequired,
  type: PropTypes.string.isRequired,
};
