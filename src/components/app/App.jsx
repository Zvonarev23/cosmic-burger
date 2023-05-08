import { ResetPasswordPage } from "../../pages/reset-password/reset-password.jsx";
import { HomePage } from "../../pages/home/home.jsx";
import { LoginPage } from "../../pages/login/login.jsx";
import { ProfilePage } from "../../pages/profile/profile.jsx";
import { RegisterPage } from "../../pages/register/register.jsx";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password.jsx";
import { OrderFeedPage } from "../../pages/order-feed/order-feed.jsx";
import { AppHeader } from "../app-header/app-header.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProfile } from "../user-profile/user-profile.jsx";
import { Orders } from "../orders/orders.jsx";
import { NotFoundPage } from "../../pages/not-found/not-found.jsx";
import { Modal } from "../modal/modal.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserAuth } from "../../services/actions/user.js";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route.jsx";
import { IngredientDetails } from "../burger-ingredients/ingredient-details/ingredient-details.jsx";
import { loadIngredients } from "../../services/actions/burger-ingredients.js";

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
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<OnlyUnAuth component={<RegisterPage />} />}
        />
        <Route
          path="/forgot-password"
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path="/reset-password"
          element={<OnlyUnAuth component={<ResetPasswordPage />} />}
        />
        <Route path="/order-feed" element={<OrderFeedPage />} />
        <Route
          path="/profile"
          element={<OnlyAuth component={<ProfilePage />} />}
        >
          <Route index element={<OnlyAuth component={<UserProfile />} />} />
          <Route path="orders" element={<OnlyAuth component={<Orders />} />} />
        </Route>
        <Route
          path="/ingredient/:_id"
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
            path="/ingredient/:_id"
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
