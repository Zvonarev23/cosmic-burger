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

export const signUp = ({ email, password, name }) => {
  return request("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });
};

export const signIn = ({ email, password }) => {
  return request("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};
