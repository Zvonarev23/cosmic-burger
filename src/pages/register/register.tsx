import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/form";
import { FormContent } from "../../components/form/form-content/form-content";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion";
import { requestSignUp } from "../../services/actions/user.js";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(requestSignUp(values));
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <FormContent>
        <h2 className="text_type_main-medium">Регистрация</h2>

        <Input
          onChange={handleChange}
          value={values.name}
          placeholder="Имя"
          name="name"
        />

        <EmailInput onChange={handleChange} value={values.email} name="email" />

        <PasswordInput
          onChange={handleChange}
          value={values.password}
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
