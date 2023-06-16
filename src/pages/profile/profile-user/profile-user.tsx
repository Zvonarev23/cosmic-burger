import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormContent } from "../../../components/form/form-content/form-content";
import styles from "./profile-user.module.css";
import { requestUpdateUser } from "../../../services/actions/user";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from "../../../hooks/useDispatch";
import { useSelector } from "../../../hooks/useSelector";

export const ProfileUser = () => {
  const user = useSelector((state) => state.user.user);

  const { values, handleChange, setValues } = useForm({
    name: user ? user.name : "",
    email: user ? user.email : "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(requestUpdateUser(values));
  };

  const handleCancel = () => {
    user
      ? setValues({
          name: user.name,
          email: user.email,
          password: "",
        })
      : setValues({
          name: "",
          email: "",
          password: "",
        });
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
          {((user && values.name !== user.name) ||
            (user && values.email !== user.email) ||
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
