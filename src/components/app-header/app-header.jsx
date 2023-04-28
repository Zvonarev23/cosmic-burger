import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useMatch } from "react-router-dom";

export const AppHeader = () => {
  const isProfilePage = useMatch("/profile");
  const isHomePage = useMatch("/");
  const isOrderFeed = useMatch("/order-feed");

  console.log(matchHome);

  return (
    <header
      className={`text text_type_main-default pt-4 pb-4 ${styles.header}`}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.link_active}` : `${styles.link}`
                }
              >
                <BurgerIcon type={isHomePage ? "primary" : "secondary"} />
                <span>Конструктор</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/order-feed"
                className={({ isActive }) =>
                  isActive ? `${styles.link_active}` : `${styles.link}`
                }
              >
                <ListIcon type={isOrderFeed ? "primary" : "secondary"} />
                <span>Лента заказов</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <NavLink to="/" className={styles.logo}>
          <Logo />
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${styles.link_active}` : `${styles.link}`
          }
        >
          <ProfileIcon type={isProfilePage ? "primary" : "secondary"} />
          <span>Личный кабинет</span>
        </NavLink>
      </div>
    </header>
  );
};
