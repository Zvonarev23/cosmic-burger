import styles from "./not-found.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-large">
        Ошибка 404. Страница не найдена...
      </h1>
    </div>
  );
};
