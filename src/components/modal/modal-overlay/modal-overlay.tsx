import styles from "./modal-overlay.module.css";

type TModalOverlay = {
  onClose: () => void;
};

export const ModalOverlay = ({ onClose }: TModalOverlay): JSX.Element => {
  const handleModalOverlay = (e: React.KeyboardEvent) => {
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
