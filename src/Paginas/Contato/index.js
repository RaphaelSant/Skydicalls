import React from "react";
import Helmet from 'react-helmet';
import Cabecalho from "../../componentes/Cabecalho/index.js";
import { BsFillTelephoneFill } from "react-icons/bs";

function PaginaInicial() {
    <Helmet title="Skydicalls - Página Inicial" />
    return (
        <>
            <Cabecalho />
            <div className="container">
                <h1 className="text-center m-3"><BsFillTelephoneFill className="p-2" />Contate-nos</h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="float-text" placeholder="nomeusuario@email.com" />
                    <label for="float-text">Nome</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="float-email" placeholder="nomeusuario@email.com" />
                    <label for="float-email">Email</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="mensagem"></textarea>
                    <label for="mensagem">Mensagem</label>
                </div>
                <button type="button" class="btn btn-secondary btn-lg mt-3 w-100">Enviar mensagem</button>
            </div>
        </>
    );
}

export default PaginaInicial;