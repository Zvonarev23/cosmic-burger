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
import { requestSignIn } from "../../services/actions/user.js";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const [form, setValue] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSignIn(form));
  };

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <FormContent>
        <h2 className="text_type_main-medium">Вход</h2>

        <EmailInput onChange={handleChange} value={form.email} name="email" />

        <PasswordInput
          onChange={handleChange}
          value={form.password}
          name="password"
        />

        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </FormContent>

      <FormSuggestion style="mb-4">
        <span className="text_type_main-default text_color_inactive mr-2">
          Вы – новый пользователь?
        </span>
        <Link
          to="/register"
          className="text_type_main-default text_color_accent"
        >
          Зарегистрироваться
        </Link>
      </FormSuggestion>

      <FormSuggestion>
        <span className="text_type_main-default text_color_inactive mr-2">
          Забыли пароль?
        </span>
        <Link
          to="/reset-password"
          className="text_type_main-default text_color_accent"
        >
          Восстановить пароль
        </Link>
      </FormSuggestion>
    </Form>
  );
};
