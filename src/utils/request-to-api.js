const API_URL = "https://norma.nomoreparties.space/api";
import { checkResponse } from "./check-response";

const request = (endpoint, options) => {
  return fetch(`${API_URL}${endpoint}`, options).then(checkResponse);
};

export const getIngredients = () => {
  return request("/ingredients");
};

export const sendOrder = (order) => {
  return request("/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
