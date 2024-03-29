const API_URL = "https://norma.nomoreparties.space/api";
import { TUseForm } from "../hooks/useForm";
import { checkResponse } from "./check-response";
import {
  TAuthResult,
  TOrder,
  TMessage,
  TUser,
  TGetIngredientsResponse,
  TSendOrderResponse,
  TGetOrderResponse,
} from "./types";

const request = <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  return fetch(`${API_URL}${endpoint}`, options).then(checkResponse<T>);
};

export const fetchWithRefresh = async <T>(
  endpoint: string,
  options: RequestInit
): Promise<T> => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    return await checkResponse(res);
  } catch (err: any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();

      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }

      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      (options.headers as { [key: string]: string }).authorization =
        refreshData.accessToken;

      const res = await fetch(`${API_URL}${endpoint}`, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const refreshToken = (): Promise<Omit<TAuthResult, "user">> => {
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

export const getIngredients = (): Promise<TGetIngredientsResponse> => {
  return request("/ingredients");
};

export const getOrder = (number: string): Promise<TGetOrderResponse> => {
  return request(`/orders/${number}`);
};

export const sendOrder = (order: TOrder): Promise<TSendOrderResponse> => {
  return fetchWithRefresh("/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken") || "",
    },
    body: JSON.stringify(order),
  });
};

export const signUp = ({
  email,
  password,
  name,
}: TUseForm): Promise<TAuthResult> => {
  return request("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });
};

export const signIn = ({ email, password }: TUseForm): Promise<TAuthResult> => {
  return request("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const signOut = (): Promise<TMessage> => {
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

export const getUser = (): Promise<Pick<TAuthResult, "success" | "user">> => {
  return fetchWithRefresh("/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken") || "",
    },
  });
};

export const updateUser = ({
  email,
  password,
  name,
}: TUseForm): Promise<Pick<TAuthResult, "success" | "user">> => {
  return fetchWithRefresh("/auth/user", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken") || "",
    },
    body: JSON.stringify({ email, password, name }),
  });
};

export const forgotPassword = (email: string): Promise<TMessage> => {
  return request("/password-reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
};

export const resetPassword = ({
  password,
  token,
}: Pick<TUser, "token" | "password">): Promise<TMessage> => {
  return request("/password-reset/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  });
};
