import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./order-details.module.css";

export const OrderDetails = (props) => {
  return (
    <ul className={`${styles.order} mb-10`}>
      <li className="pl-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={1255}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </li>
      <li>
        <ul className={`${styles.wrapper} custom-scroll pt-4 pb-4 pr-2`}>
          {props.orderDetailsList.map((item) => {
            return (
              <li className={styles.item} key={item._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}
                />
              </li>
            );
          })}
        </ul>
      </li>
      <li className="pl-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={1255}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </li>
    </ul>
  );
};

const orderDetailsTypePropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
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

OrderDetails.propTypes = {
  orderDetailsList: PropTypes.arrayOf(orderDetailsTypePropTypes).isRequired,
};
