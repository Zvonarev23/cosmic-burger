import styles from "./main.module.css";

type Tmain = {
  children: JSX.Element;
};

export const Main = ({ children }: Tmain) => {
  return (
    <main>
      <section className={styles.container}>{children}</section>
    </main>
  );
};
