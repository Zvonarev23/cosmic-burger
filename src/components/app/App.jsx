import { AppHeader } from "../app-header/app-header.jsx";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.jsx";
import { BurgerConstructor } from "../burger-constructor/burger-constructor.jsx";
import { Main } from "../main/main.jsx";
import { getIngredients } from "../../utils/request-to-api.js";
import { useEffect, useReducer, useState } from "react";
import { IngredientsContext } from "../../services/ingredients-context.js";
import { OrderContext } from "../../services/order-context.js";

const orderInitialState = {
  bun: null,
  ingredients: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: { ...action.payload },
        };
      } else {
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
      }
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};

function App() {
  const [ingredients, setIngredients] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [orderState, orderDispatcher] = useReducer(reducer, orderInitialState);

  useEffect(() => {
    getIngredients()
      .then((result) => {
        setIngredients(result.data);
      })
      .catch((error) => {
        setIsError(error);
      })
      .finally(setIsLoaded(true));
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <Main>
        {isError && <h2>Ошибка: {isError.message}</h2>}
        {!isLoaded && <h2>Загрузка...</h2>}
        {isLoaded && !isError && ingredients && (
          <IngredientsContext.Provider value={{ ingredients }}>
            <OrderContext.Provider value={{ orderState, orderDispatcher }}>
              <BurgerIngredients />
              <BurgerConstructor />
            </OrderContext.Provider>
          </IngredientsContext.Provider>
        )}
      </Main>
    </div>
  );
}

export default App;
