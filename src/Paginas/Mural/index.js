import React from "react";
import Helmet from 'react-helmet';
import Cabecalho from "../../componentes/Cabecalho/index.js";
import Rodape from "../../componentes/Rodape/index.js";
import "./muralEstilo.css";
import "../../Assets/funcoes/reveal.js";
import { Link } from "react-router-dom";

function PaginaInicial() {
    return (
        <>
            <Helmet title="Skydicalls - Página inicial" />
            <Cabecalho />
            <div className="container mt-3">
                <div class="card text-center">
                    <div class="card-header">
                        Astro Skydicalls Event
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Evento esportivo inédito em Porto Velho</h5>
                        <p class="card-text">O evento esportivo aconteceu no parque da cidade em Porto Velho e reuniu skatista de toda a cidade em um evento inédito promovido pelo grupo.</p>
                        <Link to="/mural/AstroSkydicallsEvent" class="btn btn-primary">Mural de fotos</Link>
                    </div>
                    <div class="card-footer text-muted">
                        2 dias atrás
                    </div>
                </div>
            </div>
            <Rodape />

        </>
    );
}

export default PaginaInicial;