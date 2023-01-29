import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./header.scss";

const Header = () => {
  const isAuth = false;

  return (
    <header className="header">
      <div className="container">
        <div className="header_wrap">
          <Link to="/" className="header_logo"></Link>

          {isAuth ? (
            <div>
              <Button to="/add_post" variant="solid">
                Добавить пост
              </Button>
            </div>
          ) : (
            <div className="header_btns">
              <Button to="/login" variant="solid">
                Войти
              </Button>
              <Button to="/register" variant="outline">
                Регистрация
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
