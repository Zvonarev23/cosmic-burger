import styles from "./form-suggestion.module.css";

type TFormSuggestion = {
  children: JSX.Element | JSX.Element[];
  style?: string;
};

export const FormSuggestion = ({
  children,
  style,
}: TFormSuggestion): JSX.Element => {
  return <div className={`${styles.suggestion} ${style}`}>{children}</div>;
};
