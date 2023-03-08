import { AppHeader } from "../app-header/app-header.jsx";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.jsx";
import { BurgerConstructor } from "../burger-constructor/burger-constructor.jsx";
import { data } from "../../utils/data.js";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerIngredients ingredientsList={data} />
      <BurgerConstructor orderList={data} />
    </div>
  );
}

export default App;
