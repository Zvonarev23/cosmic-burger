import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/form/form.jsx";
import { FormContent } from "../../components/form/form-content/form-content.jsx";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion.jsx";
import { useDispatch } from "react-redux";
import { requestForgotPassword } from "../../services/actions/user.js";

export const ForgotPasswordPage = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestForgotPassword(inputValue)).then(() =>
      navigate("/reset-password")
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
