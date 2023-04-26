import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/form.jsx";
import { FormContent } from "../../components/form/form-content/form-content.jsx";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion.jsx";

export const ForgotPasswordPage = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const handleNameInputValue = (e) => {
    setNameInputValue(e.target.value);
  };

  const handlePasswordInputValue = (e) => {
    setPasswordInputValue(e.target.value);
  };

  return (
    <Form>
      <FormContent>
        <h2 className="text_type_main-medium">Восстановление пароля</h2>

        <PasswordInput
          onChange={handlePasswordInputValue}
          value={passwordInputValue}
          placeholder={"Введите новый пароль"}
        />

        <Input
          onChange={handleNameInputValue}
          value={nameInputValue}
          placeholder={"Введите код из письма"}
        />

        <Button type="primary" htmlType="button">
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
