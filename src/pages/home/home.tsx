import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Main } from "../../components/main/main";
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor";

export const HomePage = () => {
  return (
    <Main>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </Main>
  );
};
