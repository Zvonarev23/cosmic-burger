import { AppHeader } from "../app-header/app-header.jsx";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.jsx";
import { BurgerConstructor } from "../burger-constructor/burger-constructor.jsx";
import { Main } from "../main/main.jsx";
import { INGREDIENTS_URL } from "../../utils/const";
import { useEffect, useState } from "react";

function App() {
  const [ingredients, setIngredients] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(INGREDIENTS_URL)
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        setIngredients(result);
      })
      .catch((error) => {
        setIsError(error);
      });
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <Main>
        {isError && <h2>Ошибка: {isError.message}</h2>}
        {!isLoaded && <h2>Загрузка...</h2>}
        {isLoaded && !isError && ingredients && (
          <>
            <BurgerIngredients ingredientsList={ingredients.data} />
            <BurgerConstructor orderList={ingredients.data} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
