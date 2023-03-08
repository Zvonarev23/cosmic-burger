import { OrderDetails } from "./order-details/order-details.jsx";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";

export const BurgerConstructor = (props) => {
  const filterBunsFromOrderList = (arr, type) => {
    return arr.filter((item) => item.type !== type);
  };

  const costOfBuns = 2510;

  const totalCost = filterBunsFromOrderList(props.orderList, "bun")
    .map((item) => item.price)
    .reduce((sum, price) => sum + price, costOfBuns);

  return (
    <section>
      <div className={styles.container}>
        <OrderDetails
          orderDetailsList={filterBunsFromOrderList(props.orderList, "bun")}
        />

        <div className={styles.submit}>
          <div className="price">
            <span className="text text_type_digits-medium mr-2">
              {totalCost}
            </span>
            <CurrencyIcon />
          </div>

          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
};

const burgerConstructorPropTypes = PropTypes.shape({
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

BurgerConstructor.propTypes = {
  orderList: PropTypes.arrayOf(burgerConstructorPropTypes).isRequired,
};
