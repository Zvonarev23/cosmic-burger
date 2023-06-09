import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { HomePage } from "../../pages/home/home";
import { LoginPage } from "../../pages/login/login";
import { ProfilePage } from "../../pages/profile/profile";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { FeedPage } from "../../pages/feed/feed";
import { AppHeader } from "../app-header/app-header";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProfileUser } from "../../pages/profile/profile-user/profile-user";
import { ProfileOrders } from "../../pages/profile/profile-orders/profile-orders";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { Modal } from "../modal/modal";
import { useEffect } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { checkUserAuth } from "../../services/actions/user";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { IngredientDetails } from "../burger-ingredients/ingredient-details/ingredient-details";
import { loadIngredients } from "../../services/actions/burger-ingredients";
import { ROUTES } from "../../utils/constant";
import { OrderInfo } from "../order-info/order-info";

function App() {
  const location = useLocation();

  const dispatch = useDispatch();

  const state = location.state;

  useEffect(() => {
    dispatch(loadIngredients());
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
        <Route path={ROUTES.FEED} element={<FeedPage />} />
        <Route path={ROUTES.FEED_ORDERS} element={<OrderInfo />} />
        <Route
          path={ROUTES.PROFILE}
          element={<OnlyAuth component={<ProfilePage />} />}
        >
          <Route index element={<OnlyAuth component={<ProfileUser />} />} />
          <Route
            path={ROUTES.ORDERS}
            element={<OnlyAuth component={<ProfileOrders />} />}
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
          <Route
            path={ROUTES.FEED_ORDERS}
            element={
              <Modal>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
