import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password.jsx";
import { HomePage } from "../../pages/home/home.jsx";
import { LoginPage } from "../../pages/login/login.jsx";
import { ProfilePage } from "../../pages/profile/profile.jsx";
import { RegisterPage } from "../../pages/register/register.jsx";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password.jsx";
import { OrderFeedPage } from "../../pages/order-feed/order-feed.jsx";
import { AppHeader } from "../app-header/app-header.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProfile } from "../user-profile/user-profile.jsx";
import { Orders } from "../orders/orders.jsx";
import { NotFoundPage } from "../../pages/not-found/not-found.jsx";
import { Modal } from "../modal/modal.jsx";
import { IngredientDetailsView } from "../burger-ingredients/ingredient-details-view/ingredient-details-view.jsx";
import { IngredientDetailsPage } from "../../pages/ingredient-details/ingredient-details-page.jsx";

function App() {
  let location = useLocation();

  let state = location.state;

  return (
    <>
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/order-feed" element={<OrderFeedPage />} />
        <Route path="/profile" element={<ProfilePage />}>
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
