import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Form } from "../../components/form/form.jsx";
import { FormContent } from "../../components/form/form-content/form-content.jsx";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion.jsx";
import { useDispatch } from "react-redux";
import { requestResetPassword } from "../../services/actions/user.js";

export const ResetPasswordPage = () => {
  const [form, setValue] = useState({ password: "", token: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fromForgotPassword = location?.state?.forgotPassword;

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestResetPassword(form)).then(() => navigate("/login"));
  };

  if (!fromForgotPassword) {
    return <Navigate to="/login" />;
  }

  return (
    <Form handleSubmit={handleSubmit}>
      <FormContent>
        <h2 className="text_type_main-medium">Восстановление пароля</h2>

        <PasswordInput
          onChange={handleChange}
          value={form.password}
          placeholder={"Введите новый пароль"}
          name="password"
        />

        <Input
          onChange={handleChange}
          value={form.token}
          placeholder={"Введите код из письма"}
          name="token"
        />

        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </FormContent>

      <FormSuggestion>
        <span className="text_type_main-default text_color_inactive mr-2">
          Вспомнили пароль?
        </span>
        <Link to="/login" className="text_type_main-default text_color_accent">
          Войти
        </Link>
      </FormSuggestion>
    </Form>
  );
};
