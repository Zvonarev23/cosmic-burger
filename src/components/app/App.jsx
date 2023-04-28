import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password.jsx";
import { HomePage } from "../../pages/home/home.jsx";
import { LoginPage } from "../../pages/login/login.jsx";
import { ProfilePage } from "../../pages/profile/profile.jsx";
import { RegisterPage } from "../../pages/register/register.jsx";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password.jsx";
import { AppHeader } from "../app-header/app-header.jsx";
import { Routes, Route } from "react-router-dom";
import { UserProfile } from "../user-profile/user-profile.jsx";
import { Orders } from "../orders/orders.jsx";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<UserProfile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
