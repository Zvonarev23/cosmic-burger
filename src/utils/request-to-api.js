const API_URL = "https://norma.nomoreparties.space/api";

export const getIngredients = () => {
  return fetch(`${API_URL}/ingredients`).then((response) => {
    if (!response.ok) {
      throw new Error("Что-то пошло не так... Статус: " + response.status);
    } else {
      return response.json();
    }
  });
};

export const sendOrder = (order) => {
  return fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.status);
    } else {
      return res.json();
    }
  });
};
