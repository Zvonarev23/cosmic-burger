import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Form } from "../../components/form/form";
import { FormContent } from "../../components/form/form-content/form-content";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion";
import { useDispatch } from "react-redux";
import { requestResetPassword } from "../../services/actions/user.js";
import { useForm } from "../../hooks/useForm.js";

export const ResetPasswordPage = () => {
  const { values, handleChange } = useForm({ password: "", token: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fromForgotPassword = location?.state?.forgotPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestResetPassword(values)).then(() => navigate("/login"));
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
          value={values.password}
          placeholder={"Введите новый пароль"}
          name="password"
        />

        <Input
          onChange={handleChange}
          value={values.token}
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
