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
import { IngredientDetailsView } from "../burger-ingredients/ingredient-details-view/ingredient-details-view.jsx";
import { IngredientDetailsPage } from "../../pages/ingredient-details/ingredient-details-page.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserAuth } from "../../services/actions/user.js";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route.jsx";

function App() {
  let location = useLocation();

  const dispatch = useDispatch();

  let state = location.state;

  useEffect(() => {
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
          <Route index element={<UserProfile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/ingredient/:_id" element={<IngredientDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/ingredient/:_id"
            element={
              <Modal>
                <IngredientDetailsView />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
