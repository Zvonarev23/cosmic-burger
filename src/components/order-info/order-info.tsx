import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientImage } from "../ingredient-image/ingredient-image";
import styles from "./order-info.module.css";
import { useSelector } from "../../hooks/useSelector";
import { useParams } from "react-router-dom";
import { Preloader } from "../preloader/preloader";

export const OrderInfo = (): JSX.Element => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const { orders, wsConnected, error } = useSelector((state) => state.feed);
  const { number } = useParams();

  const currentOrder = orders.find(
    (order) => order.number.toString() === number
  );

  const currentOrderIngredients = currentOrder?.ingredients.map(
    (ingredient) => {
      return ingredients.find((item) => item._id === ingredient);
    }
  );

  const totalPrice = currentOrderIngredients?.reduce(
    (acc, item) => (item ? item.price + acc : 0),
    0
  );

  return (
    <div className={styles.container}>
      {!wsConnected && (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      )}

      {!wsConnected && error && (
        <h2 className="text text_type_main-medium">Ошибка...</h2>
      )}

      {wsConnected && orders.length > 0 && (
        <>
          <h2 className="text text_type_digits-default mb-8">{`#${currentOrder?.number}`}</h2>
          <p className="text text_type_main-medium mb-4">
            {currentOrder?.name}
          </p>
          <span className={styles.status}>{currentOrder?.status}</span>

          <span className="text text_type_main-medium mb-6">Состав:</span>

          <ul
            className={
              currentOrderIngredients!.length > 4
                ? styles.content_scroll
                : styles.content
            }
          >
            {currentOrderIngredients!.map((ingredient, index) => {
              return (
                <li className={styles.item} key={index}>
                  <IngredientImage
                    name={ingredient!.name}
                    image={ingredient!.image}
                  />
                  <p className={styles.ingredient_name}>{ingredient!.name}</p>
                  <div className={styles.price}>
                    <span className="text text_type_digits-default">{`1 x ${ingredient?.price}`}</span>
                    <CurrencyIcon type="primary" />
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.footer}>
            <FormattedDate
              className="text text_type_main-default text_color_inactive"
              date={new Date(currentOrder!.createdAt)}
            />
            <div className={styles.total}>
              <span className="text text_type_digits-default">
                {totalPrice}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
