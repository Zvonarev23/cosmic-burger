import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export const ModalOverlay = ({ onClose }) => {
  const handleModalOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role={"button"}
      tabIndex={0}
      onClick={onClose}
      onKeyDown={handleModalOverlay}
      className={styles.overlay}
    />
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
