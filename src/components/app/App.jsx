import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password.jsx";
import { HomePage } from "../../pages/home/home.jsx";
import { LoginPage } from "../../pages/login/login.jsx";
import { RegisterPage } from "../../pages/register/register.jsx";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password.jsx";
import { AppHeader } from "../app-header/app-header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
