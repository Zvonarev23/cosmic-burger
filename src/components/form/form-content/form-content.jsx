import styles from "./form-content.module.css";
import PropTypes from "prop-types";

export const FormContent = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

FormContent.propTypes = {
  children: PropTypes.node.isRequired,
};
