import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormContent } from "../form/form-content/form-content.jsx";
import { useState } from "react";
import styles from "./user-profile.module.css";

export const UserProfile = () => {
  const [form, setValue] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
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
        <div className={styles.action}>
          <Button htmlType="button" type="secondary">
            Отмена
          </Button>
          <Button htmlType="button" type="primary">
            Сохранить
          </Button>
        </div>
      </FormContent>
    </form>
  );
};
