import { useDispatch as dispatchHook } from "react-redux";
import { AppDispatch } from "../services/types";
import type {} from "redux-thunk/extend-redux";

export const useDispatch: <T = void>() => AppDispatch<T> = dispatchHook;
