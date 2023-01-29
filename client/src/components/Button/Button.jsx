import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ to, variant, fullWidth, children }) => {
  const style = {
    width: fullWidth ? "100%" : "",
  };

  return (
    <>
      {to ? (
        <Link to={to} style={style} className={`btn ${variant}`}>
          {children}
        </Link>
      ) : (
        <button style={style} className={`btn ${variant}`}>
          {" "}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
