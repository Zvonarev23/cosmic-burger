import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { HomePage } from "../../pages/home/home";
import { LoginPage } from "../../pages/login/login";
import { ProfilePage } from "../../pages/profile/profile";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { OrderFeedPage } from "../../pages/order-feed/order-feed";
import { AppHeader } from "../app-header/app-header";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProfile } from "../user-profile/user-profile";
import { Orders } from "../orders/orders";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { Modal } from "../modal/modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserAuth } from "../../services/actions/user.js";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { IngredientDetails } from "../burger-ingredients/ingredient-details/ingredient-details";
import { loadIngredients } from "../../services/actions/burger-ingredients.js";
import { ROUTES } from "../../utils/constant";

function App() {
  const location = useLocation();

  const dispatch = useDispatch();

  const state = location.state;

  useEffect(() => {
    //@ts-ignore
    dispatch(loadIngredients());
    //@ts-ignore
    dispatch(checkUserAuth());
  }, []);

  return (
    <>
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route
          path={ROUTES.LOGIN}
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path={ROUTES.REGISTER}
          element={<OnlyUnAuth component={<RegisterPage />} />}
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<OnlyUnAuth component={<ResetPasswordPage />} />}
        />
        <Route path={ROUTES.ORDER_FEED} element={<OrderFeedPage />} />
        <Route
          path={ROUTES.PROFILE}
          element={<OnlyAuth component={<ProfilePage />} />}
        >
          <Route index element={<OnlyAuth component={<UserProfile />} />} />
          <Route
            path={ROUTES.ORDERS}
            element={<OnlyAuth component={<Orders />} />}
          />
        </Route>
        <Route
          path={ROUTES.INGREDIENT}
          element={
            <div className="pt-20">
              <IngredientDetails heading="center" />
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path={ROUTES.INGREDIENT}
            element={
              <Modal>
                <IngredientDetails heading="start" />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
