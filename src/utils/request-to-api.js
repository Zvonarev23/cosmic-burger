const API_URL = "https://norma.nomoreparties.space/api";

const request = (endpoint, options) => {
  return fetch(`${API_URL}${endpoint}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status);
  });
};

export const getIngredients = () => {
  return request("/ingredients");
};

export const sendOrder = (order) => {
  return request("/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
