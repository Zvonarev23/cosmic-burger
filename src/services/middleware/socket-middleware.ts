import { Middleware } from "redux";
import { RootState } from "../types";

type TWSActions = {
  wsInit: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export const socketMiddleware = (
  wsActions: TWSActions
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
      const { type, payload } = action;

      if (type === wsInit) {
        socket = new WebSocket(payload);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose });
        };
      }

      next(action);
    };
  };
};
