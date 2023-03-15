import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { commonPropTypes } from "../../../utils/commonPropTypes";
import styles from "./selected-ingredients.module.css";

export const SelectedIngredients = ({ orderDetailsList }) => {
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
          {orderDetailsList.map((item) => {
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

SelectedIngredients.propTypes = {
  orderDetailsList: PropTypes.arrayOf(commonPropTypes.isRequired).isRequired,
};
