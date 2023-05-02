import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "./modal-overlay/modal-overlay.jsx";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const modalRoot = document.getElementById("root-modals");

export const Modal = ({ children, onCloseModal }) => {
  const navigate = useNavigate();

  const onClose = () => {
    onCloseModal ? onCloseModal() : navigate(-1);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
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
  onCloseModal: PropTypes.func,
  children: PropTypes.node.isRequired,
};
