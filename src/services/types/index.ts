import { ThunkAction } from "redux-thunk";
import { TBurgerConstructorActions } from "../types/burger-constructor";
import { rootReducer } from "../reducers";
import { TBurgerIngredientsActions } from "../types/burger-ingredients";
import { TOrderDetailsActions } from "./order-details";
import { TUserActions } from "./user";
import { TProfileOrdersActions } from "../actions/profile-orders";

export type RootState = ReturnType<typeof rootReducer>;

export type AppActions =
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TOrderDetailsActions
  | TUserActions
  | TProfileOrdersActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

export type AppDispatch<TReturnType = void> = (
  action: AppActions | AppThunk<TReturnType>
) => TReturnType;
