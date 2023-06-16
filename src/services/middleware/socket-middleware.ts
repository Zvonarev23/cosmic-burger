import { Middleware } from "redux";
import { RootState } from "../types";

type TWSActions = {
  wsInit: string;
  wsDisconnect: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
  sendMessage: string;
};

export const socketMiddleware = (
  wsActions: TWSActions
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const {
        wsInit,
        wsDisconnect,
        onOpen,
        onClose,
        onError,
        onMessage,
        sendMessage,
      } = wsActions;
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

        if (type === sendMessage) {
          const payload = action.payload;
          socket.send(JSON.stringify(payload));
        }

        if (type === wsDisconnect) {
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  };
};
