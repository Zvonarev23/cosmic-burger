import { IngredientItem } from "../ingredient-item/ingredient-item";
import styles from "./ingredients-group.module.css";
import { TIngredient } from "../../../utils/types";

type TIngredientsGroup = {
  ingredientsType: TIngredient[];
  type: string;
};

export const IngrediensGroup = ({
  ingredientsType,
  type,
}: TIngredientsGroup) => {
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
