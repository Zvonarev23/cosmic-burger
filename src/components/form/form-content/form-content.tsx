import styles from "./form-content.module.css";
import PropTypes from "prop-types";

type FormContent = {
  children: JSX.Element;
};

export const FormContent = ({ children }: FormContent): JSX.Element => {
  return <div className={styles.content}>{children}</div>;
};

FormContent.propTypes = {
  children: PropTypes.node.isRequired,
};
