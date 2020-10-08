import React from "react";
import "../estilo/Inicio.css";
import { Link } from "react-router-dom";
function Inicio() {
  return (
    <>
      <form class="login-form">
        <p class="login-text">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-lock fa-stack-1x"></i>
          </span>
        </p>
        <input
          type="email"
          class="login-username"
          autofocus="true"
          required="true"
          placeholder="Email"
        />
        <input
          type="password"
          class="login-password"
          required="true"
          placeholder="Password"
        />
        <Link class="btn btn-primary" to="/Presentacion" role="button">
          Iniciar sesión
        </Link>
      </form>
      <a href="#" class="login-forgot-pass">
        forgot password?
      </a>
      <div class="underlay-photo"></div>
      <div class="underlay-black"></div>
    </>
  );
}
export default Inicio;
