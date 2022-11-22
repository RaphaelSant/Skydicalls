import React from "react";
import Helmet from 'react-helmet';
import "./estiloEspaco.css";
import Cabecalho from "../../../componentes/Cabecalho/index.js";
import Rodape from "../../../componentes/Rodape";
import Entrada from "../../../Assets/imagens/espacoAlternativo/espacoAlternativo.webp";
import Passarela from "../../../Assets/imagens/espacoAlternativo/passarela.jpg";
import Pista from "../../../Assets/imagens/espacoAlternativo/pista.jpg";
import Trem from "../../../Assets/imagens/espacoAlternativo/trem.PNG";
import Parquinho from "../../../Assets/imagens/espacoAlternativo/parquinho.PNG";
import PracaAlimentacao from "../../../Assets/imagens/espacoAlternativo/pracaAlimentacao.webp";



function SkatePark() {
    return (
        <>
            <Helmet title="Skydicalls - Espaço Alternativo" />
            <Cabecalho />

            <div className="container-sm mt-3">
                <div className="d-flex body-espaco">
                    <div class="card card-left sticky-top">
                        <img src={Entrada} alt="..." class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Espaço Alternativo</h5>
                            <p class="card-text">Avenida Jorge Teixeira 3986, Porto Velho, Rondônia 76821-990 Brasil</p>
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0 text-start">Sempre aberto <br />
                                    Maior movimento de pessoas: <br />
                                    16:00h - 22:00h</p>
                            </div>

                            <iframe className="mt-2" title="Mapa espaço alternativo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6258966010582!2d-63.895039985811906!3d-8.727027491411715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9232434e6a93f247%3A0x6836384a2113f53f!2sEspa%C3%A7o%20Alternativo!5e0!3m2!1spt-BR!2sbr!4v1669137472864!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                    <div className="mensagem">
                        <article className="ms-3">
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0">Sobre o local</p>
                            </div>
                            <div className="mensagem-body p-3 text-break">
                                <p>O Espaço Alternativo recebe diariamente várias pessoas que buscam uma qualidade de vida melhor com a prática de exercícios como caminhar, pedalar, patinar, e é um espaço dedicado para família e amigos.</p>
                            </div>
                        </article>

                        <article className="ms-3">
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0">Atrações no Espaço Alternativo</p>
                            </div>
                            <div className="mensagem-body p-3 text-break">
                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Pista} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Pista de Caminhada</h5>
                                                <p class="card-text">A pista de caminhada abre entre 06:00h - 09:00h e 17:00h - 21:00h.</p>
                                                <div class="icon-text d-flex align-items-center justify-content-center">
                                                    <span class="icon has-text-info">
                                                        <svg class="svg-inline--fa fa-info-circle fa-w-16 text-primary" aria-hidden="true" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                                                    </span>
                                                    <span className="ms-1 text-primary text-opacity-75">O fluxo de veículos muda para a Avenida Lauro Sodré.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={PracaAlimentacao} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Praça de Alimentação</h5>
                                                <p class="card-text">Muitas opções de lanches para você e sua família, Hot-dog, Pratos variados, Pipoca, Churros, Açai, Tererê e muitas outras opções.</p>
                                                <div class="icon-text d-flex align-items-center justify-content-center">
                                                    <span class="icon has-text-info">
                                                        <svg class="svg-inline--fa fa-info-circle fa-w-16 text-primary" aria-hidden="true" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                                                    </span>
                                                    <span className="ms-1 text-primary text-opacity-75">Estabelecimentos de comidas nas redondezas.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Passarela} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Passarela</h5>
                                                <p class="card-text">A passarela é uma grande atração da cidade. O cenário é adequado e muito bonito para fotografias. "Porto Velho já é reconhecida pela Estrada de Ferro Madeira-Mamoré, pelo rio Madeira, e agora pela passarela”.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Trem} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Estrada de Ferro Madeira Mamoré</h5>
                                                <p class="card-text">No Espaço Alternativo de Porto Velho temos uma replica da Estrada de Ferro Madeira Mamoré. Considerada um ícone ferroviário mundial. Foi a 15ª ferrovia a ser construída no país, tendo as suas obras sido executadas entre 1907 e 1912.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Parquinho} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Parque Infantil</h5>
                                                <p class="card-text">Diversas barraquinhas de lanches como Hot-dog, Sorvetes, Churros, Picóle, Pipoca e muito mais.</p>
                                                <div class="icon-text d-flex align-items-center justify-content-center">
                                                    <span class="icon has-text-info">
                                                        <svg class="svg-inline--fa fa-info-circle fa-w-16 text-primary" aria-hidden="true" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                                                    </span>
                                                    <span className="ms-1 text-primary text-opacity-75">Aluguel de brinquedos infantis, patinetes, patins, bicicletas e etc.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <Rodape />
        </>
    );
}

export default SkatePark;