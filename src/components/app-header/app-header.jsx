import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
  return (
    <header
      className={`text text_type_main-default pt-4 pb-4 ${styles.header}`}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <a className={styles.link_active} href="/">
                <BurgerIcon type="primary" />
                <span>Конструктор</span>
              </a>
            </li>

            <li>
              <a className={styles.link} href="/">
                <ListIcon type="secondary" />
                <span>Лента заказов</span>
              </a>
            </li>
          </ul>
        </nav>

        <a className={styles.logo} href="/">
          <Logo />
        </a>

        <a className={styles.link} href="/">
          <ProfileIcon type="secondary" />
          <span>Личный кабинет</span>
        </a>
      </div>
    </header>
  );
};
