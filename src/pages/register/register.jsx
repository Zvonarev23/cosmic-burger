import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/form.jsx";
import { FormContent } from "../../components/form/form-content/form-content.jsx";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion.jsx";

export const RegisterPage = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const handleNameInputValue = (e) => {
    setNameInputValue(e.target.value);
  };

  const handleEmailInputValue = (e) => {
    setEmailInputValue(e.target.value);
  };

  const handlePasswordInputValue = (e) => {
    setPasswordInputValue(e.target.value);
  };

  return (
    <Form>
      <FormContent>
        <h2 className="text_type_main-medium">Регистрация</h2>

        <Input
          onChange={handleNameInputValue}
          value={nameInputValue}
          placeholder={"Имя"}
        />

        <EmailInput onChange={handleEmailInputValue} value={emailInputValue} />

        <PasswordInput
          onChange={handlePasswordInputValue}
          value={passwordInputValue}
        />

        <Button type="primary" htmlType="button">
          Зарегистрироваться
        </Button>
      </FormContent>

      <FormSuggestion>
        <span className="text_type_main-default text_color_inactive mr-2">
          Уже зарегистрированы?
        </span>
        <Link className="text_type_main-default text_color_accent">Войти</Link>
      </FormSuggestion>
    </Form>
  );
};
