import { useSelector } from "../../hooks/useSelector";
import styles from "./order-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

type Torder = {
  order: {
    ingredients: string[];
    _id: string;
    status: string;
    name: string;
    number: number;
    createdAt: string;
    updatedAt: string;
  };
};

export const OrderCard = ({ order }: Torder): JSX.Element => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const orderIngredients = order.ingredients.map((ingredientId) => {
    return ingredients.find((item) => item._id === ingredientId);
  });

  const orderPrice = orderIngredients.reduce(
    (acc, item) => (item ? acc + item.price : 0),
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className="text text_type_digits-default">{`#${order.number}`}</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order.createdAt)}
        />
      </div>
      <p className="text text_type_main-medium mb-2">{order.name}</p>
      <p className="text text_type_main-default mb-4">{order.status}</p>
      <div className={styles.footer}>
        <ul className={styles.list}>
          {orderIngredients.map((item, index) => {
            return (
              <li
                style={{ zIndex: Math.abs(index - orderIngredients.length) }}
                className={styles.item}
                key={item?._id}
              >
                <img
                  className={styles.image}
                  alt={item?.name}
                  src={item?.image}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles.price}>
          <span className="text text_type_digits-default">{orderPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
