import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/form.jsx";
import { FormContent } from "../../components/form/form-content/form-content.jsx";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion.jsx";

export const ResetPasswordPage = () => {
  const [emailInputValue, setEmailInputValue] = useState("");

  const handleEmailInputValue = (e) => {
    setEmailInputValue(e.target.value);
  };

  return (
    <Form>
      <FormContent>
        <h2 className="text_type_main-medium">Восстановление пароля</h2>

        <EmailInput onChange={handleEmailInputValue} value={emailInputValue} />

        <Button type="primary" htmlType="button">
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
