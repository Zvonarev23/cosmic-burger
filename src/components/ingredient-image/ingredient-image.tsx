import styles from "./ingredient-image.module.css";

type TIngredientsImage = {
  name: string;
  image: string;
};

export const IngredientImage = ({
  name,
  image,
}: TIngredientsImage): JSX.Element => {
  return (
    <div className={styles.image_container}>
      <img className={styles.image} alt={name} src={image} />
    </div>
  );
};
