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

export const ResetPasswordPage = () => {
  const [form, setValue] = useState({ password: "", code: "" });

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Form>
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
          value={form.code}
          placeholder={"Введите код из письма"}
          name="code"
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
