import styles from "./form-suggestion.module.css";
import PropTypes from "prop-types";

export const FormSuggestion = ({ children, style }) => {
  return <div className={`${styles.suggestion} ${style}`}>{children}</div>;
};

FormSuggestion.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};
