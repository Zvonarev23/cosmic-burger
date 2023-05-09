import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormContent } from "../form/form-content/form-content.jsx";
import { useState } from "react";
import styles from "./user-profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { requestUpdateUser } from "../../services/actions/user.js";

export const UserProfile = () => {
  const { name, email } = useSelector((state) => state.user.user);
  const [form, setValue] = useState({ name: name, email: email, password: "" });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestUpdateUser(form.name, form.email));
  };

  const handleCancel = () => {
    setValue({ name: name, email: email, password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContent>
        <Input
          onChange={handleChange}
          value={form.name}
          placeholder="Имя"
          icon="EditIcon"
          name="name"
        />
        <EmailInput
          onChange={handleChange}
          value={form.email}
          placeholder="Логин"
          icon="EditIcon"
          name="email"
        />
        <PasswordInput
          onChange={handleChange}
          value={form.password}
          icon="EditIcon"
          name="password"
        />
        {(form.name !== name ||
          form.email !== email ||
          form.password !== "") && (
          <div className={styles.action}>
            <Button onClick={handleCancel} htmlType="button" type="secondary">
              Отмена
            </Button>
            <Button htmlType="submit" type="primary">
              Сохранить
            </Button>
          </div>
        )}
      </FormContent>
    </form>
  );
};
