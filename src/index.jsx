import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App.jsx";
import { configureStore } from "./services/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
