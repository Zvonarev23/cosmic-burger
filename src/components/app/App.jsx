import { AppHeader } from "../app-header/app-header.jsx";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.jsx";
import { BurgerConstructor } from "../burger-constructor/burger-constructor.jsx";
import { Main } from "../main/main.jsx";
import { INGREDIENTS_URL } from "../../utils/const";
import { useEffect, useState } from "react";
import { IngredientsContext } from "../../services/ingredientsContext.js";

function App() {
  const [ingredients, setIngredients] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(INGREDIENTS_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Что-то пошло не так... Статус: " + response.status);
        } else {
          return response.json();
        }
      })
      .then((result) => {
        setIsLoaded(true);
        setIngredients(result.data);
      })
      .catch((error) => {
        setIsLoaded(true);
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
          <IngredientsContext.Provider value={{ ingredients }}>
            <BurgerIngredients />
            <BurgerConstructor />
          </IngredientsContext.Provider>
        )}
      </Main>
    </div>
  );
}

export default App;
