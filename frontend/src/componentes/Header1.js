import React from "react";
import { Link } from "react-router-dom";
import "../estilo/navs.css";
function Header1() {
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link" to="/Presentacion">
            Presentacion
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/potabi">
            Metodos/potabilizacion
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
            Videos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Foro
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header1;
