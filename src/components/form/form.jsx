import styles from "./form.module.css";
import PropTypes from "prop-types";

export const Form = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
