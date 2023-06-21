import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const modalRoot = document.getElementById("root-modals") as HTMLElement;

type Tmodal = {
  children: JSX.Element;
  onCloseModal?: () => void;
};

export const Modal = ({ children, onCloseModal }: Tmodal): JSX.Element => {
  const navigate = useNavigate();

  const onClose = () => {
    onCloseModal ? onCloseModal() : navigate(-1);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
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
      <div className={styles.modal} data-testid="modal">
        <button
          onClick={onClose}
          className={styles.close}
          data-testid="modal_close"
        >
          <CloseIcon type="primary" />
        </button>

        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};
