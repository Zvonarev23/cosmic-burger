import { AppHeader } from "../app-header/app-header.jsx";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.jsx";
import { data } from "../../utils/data.js";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerIngredients ingredientsList={data} />
    </div>
  );
}

export default App;
