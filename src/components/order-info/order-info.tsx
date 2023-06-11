import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientImage } from "../ingredient-image/ingredient-image";
import styles from "./order-info.module.css";
import { useSelector } from "../../hooks/useSelector";
import { TGetOrder } from "../../utils/types";

type TOrderInfo = {
  order: TGetOrder;
};

export const OrderInfo = ({ order }: TOrderInfo): JSX.Element => {
  const { ingredients } = useSelector((state) => state.ingredients);

  const currentOrderIngredients = order.ingredients.map((ingredient) => {
    return ingredients.find((item) => item._id === ingredient);
  });

  const totalPrice = currentOrderIngredients.reduce(
    (acc, item) => (item ? item.price + acc : 0),
    0
  );

  return (
    <div className={styles.container}>
      <>
        <h2 className="text text_type_digits-default mb-8">{`#${order.number}`}</h2>
        <p className="text text_type_main-medium mb-4">{order.name}</p>
        <span className={styles.status}>{order.status}</span>

        <span className="text text_type_main-medium mb-6">Состав:</span>

        <ul
          className={
            currentOrderIngredients.length > 4
              ? styles.content_scroll
              : styles.content
          }
        >
          {currentOrderIngredients.map((ingredient, index) => {
            if (ingredient === undefined) {
              return null;
            }

            return (
              <li className={styles.item} key={index}>
                <IngredientImage
                  name={ingredient.name}
                  image={ingredient.image}
                />

                <p className={styles.ingredient_name}>{ingredient.name}</p>

                <div className={styles.price}>
                  <span className="text text_type_digits-default">{`1 x ${ingredient.price}`}</span>

                  <CurrencyIcon type="primary" />
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.footer}>
          <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={new Date(order.createdAt)}
          />
          <div className={styles.total}>
            <span className="text text_type_digits-default">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </>
    </div>
  );
};
