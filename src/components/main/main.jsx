import styles from "./main.module.css";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
  return (
    <main>
      <section className={styles.container}>{children}</section>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
