import React from "react";
import "./auth.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSumit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Войти</Heading>

        <form className="auth_box_form" onSubmit={handleSumit}>
          <Input
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
          <p className="auth_text fs-12">
            <Link to="/forgot">Забыли пароль?</Link>
          </p>
          <Button fullWidth variant="solid" type="submit">
            Войти
          </Button>
        </form>

        <p className="auth_text fs-12">
          Нет аккаунта?
          <Link to="/register">Создать аккаунт</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
