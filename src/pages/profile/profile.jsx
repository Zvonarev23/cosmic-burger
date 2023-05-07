import { NavLink, Outlet } from "react-router-dom";
import styles from "./profile.module.css";
import { requestSignOut } from "../../services/actions/user";
import { useDispatch } from "react-redux";

export const ProfilePage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(requestSignOut());
  };

  return (
    <div className={styles.layout}>
      <div className={styles.menu_container}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <NavLink
              to="/profile"
              end
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <button
              onClick={handleClick}
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
