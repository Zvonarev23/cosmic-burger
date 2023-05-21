import styles from "./form.module.css";

type TForm = {
  handleSubmit: () => void;
  children: JSX.Element;
};

export const Form = ({ children, handleSubmit }: TForm): JSX.Element => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {children}
    </form>
  );
};
