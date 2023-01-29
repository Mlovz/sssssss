import React from "react";
import "./auth.scss";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";

const Register = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Регистрация</Heading>

        <form className="auth_box_form">
          <Input
            name="username"
            placeholder="Username"
            required
            // value={username}
            // onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            // value={password}
            // onChange={handleChange}
          />
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm password"
            required
            // value={confirm_password}
            // onChange={handleChange}
          />

          {/* <span className="error fs-12">{err}</span> */}

          <Button fullWidth variant="solid" type="submit">
            Регистрация
          </Button>
        </form>
        <p className="auth_text fs-12">
          Есть аккаунт?
          <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
