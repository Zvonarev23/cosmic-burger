import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/form";
import { FormContent } from "../../components/form/form-content/form-content";
import { FormSuggestion } from "../../components/form/form-suggestion/form-suggestion";
import { requestSignIn } from "../../services/actions/user.js";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm.js";

export const LoginPage = () => {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSignIn(values));
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <FormContent>
        <h2 className="text_type_main-medium">Вход</h2>

        <EmailInput onChange={handleChange} value={values.email} name="email" />

        <PasswordInput
          onChange={handleChange}
          value={values.password}
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
          to="/forgot-password"
          className="text_type_main-default text_color_accent"
        >
          Восстановить пароль
        </Link>
      </FormSuggestion>
    </Form>
  );
};
