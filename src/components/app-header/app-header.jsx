import React from "react";
import stylesHeader from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
  return (
    <header
      className={`text text_type_main-default pt-4 pb-4 ${stylesHeader.header}`}
    >
      <div className={stylesHeader.container}>
        <nav className={stylesHeader.nav}>
          <ul className={stylesHeader.list}>
            <li>
              <a className={stylesHeader.link_active} href="/">
                <BurgerIcon type="primary" />
                <span>Конструктор</span>
              </a>
            </li>

            <li>
              <a className={stylesHeader.link} href="/">
                <ListIcon type="secondary" />
                <span>Лента заказов</span>
              </a>
            </li>
          </ul>
        </nav>

        <a className={stylesHeader.logo} href="/">
          <Logo />
        </a>

        <a className={stylesHeader.link} href="/">
          <ProfileIcon type="secondary" />
          <span>Личный кабинет</span>
        </a>
      </div>
    </header>
  );
};
