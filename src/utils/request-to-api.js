const API_URL = "https://norma.nomoreparties.space/api";
import { checkResponse } from "./check-response";

const request = (endpoint, options) => {
  return fetch(`${API_URL}${endpoint}`, options).then(checkResponse);
};

export const fetchWithRefresh = async (endpoint, options) => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(`${API_URL}${endpoint}`, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const refreshToken = () => {
  return request("/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

export const getIngredients = () => {
  return request("/ingredients");
};

export const sendOrder = (order) => {
  return fetchWithRefresh("/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
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

export const signOut = () => {
  return request("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

export const getUser = () => {
  return fetchWithRefresh("/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const updateUser = (name, email) => {
  return fetchWithRefresh("/auth/user", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({ name, email }),
  });
};
