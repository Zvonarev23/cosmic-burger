import styles from "./form.module.css";
import PropTypes from "prop-types";

export const Form = ({ children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func,
};
