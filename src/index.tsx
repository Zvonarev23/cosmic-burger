import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { configureStore } from "./services/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const store = configureStore();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Не удалось найти корневой элемент");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
