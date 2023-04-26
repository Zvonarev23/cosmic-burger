import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/form.jsx";
import { FormContent } from "../../components/form/form-content/form-content.jsx";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion.jsx";

export const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailValue = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <Form>
      <FormContent>
        <h2 className="text_type_main-medium">Вход</h2>

        <EmailInput onChange={handleEmailValue} value={emailValue} />

        <PasswordInput onChange={handlePasswordValue} value={passwordValue} />

        <Button type="primary" htmlType="button">
          Войти
        </Button>
      </FormContent>

      <FormSuggestion style="mb-4">
        <span className="text_type_main-default text_color_inactive mr-2">
          Вы – новый пользователь?
        </span>
        <Link className="text_type_main-default text_color_accent">
          Зарегистрироваться
        </Link>
      </FormSuggestion>

      <FormSuggestion>
        <span className="text_type_main-default text_color_inactive mr-2">
          Забыли пароль?
        </span>
        <Link className="text_type_main-default text_color_accent">
          Восстановить пароль
        </Link>
      </FormSuggestion>
    </Form>
  );
};
