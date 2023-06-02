import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef, useState, useMemo } from "react";
import { useSelector } from "../../hooks/useSelector";
import styles from "./burger-ingredients.module.css";
import { IngrediensGroup } from "./ingredients-group/ingredients-group";
import { TIngredient } from "../../utils/types";

export const BurgerIngredients = (): JSX.Element => {
  const { isLoading, isError, ingredients } = useSelector(
    (state) => state.ingredients
  );

  const [current, setCurrent] = useState("bun");

  const rootRef = useRef<HTMLDivElement>(null);
  const tabBunRef = useRef<HTMLLIElement>(null);
  const tabSauceRef = useRef<HTMLLIElement>(null);
  const tabMainRef = useRef<HTMLLIElement>(null);

  const handleScroll = () => {
    if (
      !rootRef.current ||
      !tabBunRef.current ||
      !tabSauceRef.current ||
      !tabMainRef.current
    ) {
      return;
    }

    const bunsLocation = Math.abs(
      rootRef.current.getBoundingClientRect().top -
        tabBunRef.current.getBoundingClientRect().top
    );

    const saucesLocation = Math.abs(
      rootRef.current.getBoundingClientRect().top -
        tabSauceRef.current.getBoundingClientRect().top
    );

    const mainsLocation = Math.abs(
      rootRef.current.getBoundingClientRect().top -
        tabMainRef.current.getBoundingClientRect().top
    );

    const currentLocation = Math.min(
      bunsLocation,
      saucesLocation,
      mainsLocation
    );

    bunsLocation === currentLocation
      ? setCurrent("bun")
      : saucesLocation === currentLocation
      ? setCurrent("sauce")
      : setCurrent("main");
  };

  const selectCategory = (category: string) => {
    setCurrent(category);

    switch (category) {
      case "bun":
        tabBunRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "sauce":
        tabSauceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "main":
        tabMainRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  const [buns, sauces, mains] = useMemo(() => {
    const buns = ingredients.filter((item: TIngredient) => item.type === "bun");
    const mains = ingredients.filter(
      (item: TIngredient) => item.type === "main"
    );
    const sauces = ingredients.filter(
      (item: TIngredient) => item.type === "sauce"
    );

    return [buns, sauces, mains];
  }, [ingredients]);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (!isLoading && isError) {
    return <h1>Непредвиденная ошибка</h1>;
  }

  return (
    <div className="pt-10">
      <h1 className={`text text_type_main-large mb-5`}>Соберите бургер</h1>
      <div className={`${styles.tabs} mb-10`}>
        <Tab value="bun" active={current === "bun"} onClick={selectCategory}>
          Булки
        </Tab>

        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={selectCategory}
        >
          Соусы
        </Tab>

        <Tab value="main" active={current === "main"} onClick={selectCategory}>
          Начинки
        </Tab>
      </div>

      <div
        ref={rootRef}
        onScroll={handleScroll}
        className={`${styles.wrapper} custom-scroll`}
      >
        <ul>
          <li ref={tabBunRef}>
            <IngrediensGroup type="Булки" ingredientsType={buns} />
          </li>

          <li ref={tabSauceRef}>
            <IngrediensGroup type="Соусы" ingredientsType={sauces} />
          </li>

          <li ref={tabMainRef}>
            <IngrediensGroup type="Начинки" ingredientsType={mains} />
          </li>
        </ul>
      </div>
    </div>
  );
};
