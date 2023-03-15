import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "./modal-overlay/modal-overlay.jsx";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { useEffect } from "react";

const modalRoot = document.getElementById("root-modals");

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleModalOverlay = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleModalOverlay);

    return () => {
      document.removeEventListener("keydown", handleModalOverlay);
    };
  }, []);

  return createPortal(
    <>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.close}>
          <CloseIcon type="primary" />
        </button>

        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
