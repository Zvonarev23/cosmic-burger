import styles from "./form-content.module.css";

type TFormContent = {
  children: JSX.Element;
};

export const FormContent = ({ children }: TFormContent): JSX.Element => {
  return <div className={styles.content}>{children}</div>;
};
