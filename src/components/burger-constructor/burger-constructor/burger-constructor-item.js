import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-item.module.css";
import { commonPropTypes } from "../../../utils/common-proptypes";
import { useDispatch } from "react-redux";
import { deleteIngredient } from "../../../services/actions/burger-constructor";

export const BurgerConstructorItem = ({ item }) => {
  const dispatch = useDispatch();

  const onDeleteIngredient = () => {
    dispatch(deleteIngredient(item));
  };

  return (
    <li className={styles.item}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        thumbnail={item.image}
        price={item.price}
        handleClose={onDeleteIngredient}
      />
    </li>
  );
};

BurgerConstructorItem.propTypes = {
  item: commonPropTypes.isRequired,
};
