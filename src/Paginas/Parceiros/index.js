import React from "react";
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";

function Parceiros () {
    <Helmet title="Skydicalls - Parceiros" />
    return (
        <>
            <Cabecalho />
            <h1>Parceiros</h1>
            <Link to="/">Voltar para pagina Inicial</Link>
        </>
    );
}

export default Parceiros;