import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const modalRoot = document.getElementById("root-modals");

export const Modal = ({ children }) => {
  return (
    createPortal(
      <div className={styles.modal}>
        <div className="header">
          <h2 className="heading"></h2>
          <CloseIcon type="primary" />
        </div>

        {children}
      </div>
    ),
    modalRoot
  );
};
