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
            Metodos de potabilizacion
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/video" >
            Videos
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/foropag">
            Foro
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header1;
