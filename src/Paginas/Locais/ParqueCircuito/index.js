import React from "react";
import Helmet from 'react-helmet';
import Cabecalho from "../../../componentes/Cabecalho/index.js";
import Rodape from "../../../componentes/Rodape";
// import Piquenique from "../../../Assets/imagens/parq_circ/piqueniq.PNG";
import Caminhada from "../../../Assets/imagens/parq_circ/caminhada.PNG";
import Entrada from "../../../Assets/imagens/parq_circ/entrada_parq.webp";
import Brinquedos from "../../../Assets/imagens/parq_circ/brinquedos.PNG";
import Atividades from "../../../Assets/imagens/parq_circ/atividades_ar_livre.PNG";



function ParqueCircuito() {
    return (
        <>
            <Helmet title="Skydicalls - Parque Circuito" />
            <Cabecalho />

            <div className="container-sm mt-3">
                <div className="d-flex body-espaco">
                    <div class="card card-left sticky-top">
                        <img src={Entrada} alt="..." class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Parque Circuito</h5>
                            <p class="card-text">Av. Lauro Sodré, 2983 - Olaria, Porto Velho - RO, 76803-460</p>
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0 text-start">Segunda-Feira à Domingo<br />
                                    08:00h - 19:00h <br /></p>
                            </div>

                            <iframe className="mt-2" title="Mapa espaço alternativo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5650442653514!2d-63.9033467858118!3d-8.732785091489536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x923243236a0e5ff3%3A0x41648440e2abe17d!2sParque%20Circuito!5e0!3m2!1spt-BR!2sbr!4v1669140438308!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                    <div className="mensagem">
                        <article className="ms-3">
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0">Sobre o local</p>
                            </div>
                            <div className="mensagem-body p-3 text-break">
                                <p>O Parque Circuito ou Parque dos Seringueiros é um parque para a prática de exercícios e atividades ao ar livre localizado em Porto Velho, e tem esse nome por conta das árvores de seringueiras presentes em todo o local.</p>
                            </div>
                        </article>

                        <article className="ms-3">
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0">Atrações no Parque Circuito</p>
                            </div>
                            <div className="mensagem-body p-3 text-break">
                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Caminhada} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Pista de Caminhada</h5>
                                                <p class="card-text">No Parque Circuito encontramos uma ótima pista para caminhada, corrida e pedalada, Otíma para você fazer seus exercícios físicos. A distância total da pista é próxima de 1km.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Atividades} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Atividades ao ar livre</h5>
                                                <p class="card-text">Faça atividades ao ar livre no Parque Circuito! Aqui você pode fazer seu piquenique com sua família, tirar fotografias no ambiente natural cheio de árvores e com presença de animais, praticar dança, yoga, passear com seu pet e muito mais!</p>
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
                                            <img src={Brinquedos} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Brinquedos para Crianças</h5>
                                                <p class="card-text">Brinquedos grátis para a diversão da criançada.</p>
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

export default ParqueCircuito;