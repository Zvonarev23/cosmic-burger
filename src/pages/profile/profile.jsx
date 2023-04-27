import { Link, Outlet } from "react-router-dom";
import styles from "./profile.module.css";

export const ProfilePage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.menu_container}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link
              to="/profile"
              className="text text_type_main-medium text_color_inactive"
            >
              Профиль
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="orders"
              className="text text_type_main-medium text_color_inactive"
            >
              История заказов
            </Link>
          </li>
          <li className={styles.item}>
            <button
              className={`${styles.button} text text_type_main-medium text_color_inactive`}
            >
              Выход
            </button>
          </li>
        </ul>

        <p
          className={`${styles.description} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить&nbsp;свои персональные данные
        </p>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
