import React from "react";
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho/index.js";

function PaginaInicial() {
    <Helmet title="Skydicalls - Página Inicial" />
    return (
        <>
            <Cabecalho />

            <div className="container">
                <h1>Esta é a pagina Inicial</h1>
                <Link to="/parceiros">Ir para Parceiros</Link>
            </div>
        </>
    );
}

export default PaginaInicial;