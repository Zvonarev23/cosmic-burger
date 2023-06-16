import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-item.module.css";
import { useDispatch } from "react-redux";
import {
  deleteIngredient,
  sortIngredients,
} from "../../../services/actions/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { TBurgerConstructorItem } from "../../../utils/types";
import { useSelector } from "../../../hooks/useSelector";

type BurgerConstructorItemProps = {
  item: TBurgerConstructorItem;
  index: number;
};

type TIngredientDragType = {
  index: number;
};

type TDragCollectedProps = {
  isDragging: boolean;
};

export const BurgerConstructorItem = ({
  item,
  index,
}: BurgerConstructorItemProps): JSX.Element => {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(
    (state) => state.burgerConstructor.ingredients
  );

  const onDeleteIngredient = () => {
    dispatch(deleteIngredient(item));
  };

  const ref = useRef<HTMLLIElement | null>(null);

  const [, drop] = useDrop<TIngredientDragType>({
    accept: "sorting",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) {
        return;
      }

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredients(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag<
    TIngredientDragType,
    unknown,
    TDragCollectedProps
  >({
    type: "sorting",
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const moveIngredients = (dragIndex: number, hoverIndex: number) => {
    const dragIngredient = constructorIngredients[dragIndex];
    const newIngredients = [...constructorIngredients];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragIngredient);
    dispatch(sortIngredients(newIngredients));
  };

  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;

  return (
    <li ref={ref} className={styles.item} style={{ opacity }}>
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
