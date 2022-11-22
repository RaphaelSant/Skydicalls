import React from "react";
import { Link } from "react-router-dom";
import "./estiloCabecalho.css";

function Cabecalho() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link class="navbar-brand" href="/">Navbar</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">Página Inicial</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Locais
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/skatepark">Skate Park</Link></li>
                <li><Link class="dropdown-item" to="/espacoalternativo">Espaço alternativo</Link></li>
                <li><Link class="dropdown-item" to="/parquecircuito">Parque Circuito</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/parceiros">Parceiros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/parceiros">Mural</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contato">Contato</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Cabecalho;