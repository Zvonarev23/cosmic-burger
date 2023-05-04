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
import { requestSignUp } from "../../services/actions/user.js";
import { useDispatch } from "react-redux";

export const RegisterPage = () => {
  const [form, setValue] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSignUp(form));
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <FormContent>
        <h2 className="text_type_main-medium">Регистрация</h2>

        <Input
          onChange={handleChange}
          value={form.name}
          placeholder="Имя"
          name="name"
        />

        <EmailInput onChange={handleChange} value={form.email} name="email" />

        <PasswordInput
          onChange={handleChange}
          value={form.password}
          name="password"
        />

        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </FormContent>

      <FormSuggestion>
        <span className="text_type_main-default text_color_inactive mr-2">
          Уже зарегистрированы?
        </span>
        <Link to="/login" className="text_type_main-default text_color_accent">
          Войти
        </Link>
      </FormSuggestion>
    </Form>
  );
};
