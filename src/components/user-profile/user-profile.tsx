import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormContent } from "../form/form-content/form-content";
import styles from "./user-profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestUpdateUser } from "../../services/actions/user.js";
import { useForm } from "../../hooks/useForm";

export const UserProfile = () => {
  //@ts-ignore
  const { name, email } = useSelector((state) => state.user.user);

  const { values, handleChange, setValues } = useForm({
    name: name,
    email: email,
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(requestUpdateUser(values));
  };

  const handleCancel = () => {
    setValues({ name: name, email: email, password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContent>
        <Input
          onChange={handleChange}
          value={values.name}
          placeholder="Имя"
          icon="EditIcon"
          name="name"
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          placeholder="Логин"
          isIcon={true}
          name="email"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          icon="EditIcon"
          name="password"
        />
        <>
          {(values.name !== name ||
            values.email !== email ||
            values.password !== "") && (
            <div className={styles.action}>
              <Button onClick={handleCancel} htmlType="button" type="secondary">
                Отмена
              </Button>
              <Button htmlType="submit" type="primary">
                Сохранить
              </Button>
            </div>
          )}
        </>
      </FormContent>
    </form>
  );
};
