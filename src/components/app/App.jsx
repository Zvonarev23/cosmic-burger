import { AppHeader } from "../app-header/app-header.jsx";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.jsx";
import { BurgerConstructor } from "../burger-constructor/burger-constructor.jsx";
import { Main } from "../main/main.jsx";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Main>
        <BurgerIngredients />
        <BurgerConstructor />
      </Main>
    </div>
  );
}

export default App;
