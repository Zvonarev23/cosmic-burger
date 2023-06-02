import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form } from "../../components/form/form";
import { FormContent } from "../../components/form/form-content/form-content";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion";
import { requestForgotPassword } from "../../services/actions/user";
import { useDispatch } from "../../hooks/useDispatch";

export const ForgotPasswordPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(requestForgotPassword(inputValue)).then(() =>
      navigate("/reset-password", { state: { forgotPassword: location } })
    );
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <FormContent>
        <h2 className="text_type_main-medium">Восстановление пароля</h2>

        <EmailInput onChange={handleChange} value={inputValue} />

        <Button type="primary" htmlType="submit">
          Восстановить
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
