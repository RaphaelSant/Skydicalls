import React from "react";
import Helmet from 'react-helmet';
import './estilo_skatepark.css';
import Cabecalho from "../../../componentes/Cabecalho/index.js";
import Skate from "../../../Assets/imagens/skatepark/skate_parque.PNG"
import Half from "../../../Assets/imagens/skatepark/half.PNG";
import PistaCaminhada from "../../../Assets/imagens/skatepark/pista_caminhada.PNG";
import Quadra from "../../../Assets/imagens/skatepark/quadra.PNG";
import Teres from "../../../Assets/imagens/skatepark/teres.PNG";
import Parquinho from "../../../Assets/imagens/skatepark/parquinho.PNG";
import Lanches from "../../../Assets/imagens/skatepark/lanches.PNG";
import Rodape from "../../../componentes/Rodape";


function SkatePark() {
    return (
        <>
            <Helmet title="Skydicalls - Skate Park" />
            <Cabecalho />

            <div className="container-sm mt-3">
                <div className="d-flex body-skatePark">
                    <div class="card card-left sticky-top">
                        <img src={Skate} alt="..." class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Skate Parque</h5>
                            <p class="card-text">Av. Guaporé, 3842-4000 - Cuniã, Porto Velho - RO</p>
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0 text-start">Sempre aberto <br />
                                    Maior movimento de pessoas: <br />
                                    5:00 - 09:00 / 16:00 - 22:00</p>
                            </div>

                            <iframe className="mt-2" title="mapa skate parque" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.346251877796!2d-63.864649884673554!3d-8.753455291772102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325b57b8446d9f%3A0xa99e22b4ab0476ba!2sSkate%20Parque!5e0!3m2!1spt-BR!2sbr!4v1669128817154!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                    <div className="mensagem">
                        <article className="">
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0">Sobre o local</p>
                            </div>
                            <div className="mensagem-body p-3 text-break">
                                <p>O Skate Parque é um espaço público destinada à prática de exercícios físicos, como caminhada/corrida, passeio de bicicleta, skate, patins, dança e claro, prática de skate nos halfpipes instalado no local. No Skate Parque você também encontra opções de lazer e diversão para sua família e amigos.</p>
                            </div>
                        </article>

                        <article className="">
                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                <p className="m-0">Atrações no Skate Parque</p>
                            </div>
                            <div className="mensagem-body p-3 text-break">
                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Half} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Halfpipes</h5>
                                                <p class="card-text">No Skate Parque não pode deixar de faltar os Halfpipes. Nos finais de tarde e durante a noite toda muitos praticantes de skate vão para o Skate Parque colocar suas manobras em prática e mostrar que sabem mandar muito bem com o shape.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={PistaCaminhada} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Pista de caminhada</h5>
                                                <p class="card-text">São 1200 metros de muita pista para você caminhar e exercitar seu corpo na pista do skate parque.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Quadra} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Quadra de Esportes</h5>
                                                <p class="card-text">Duas quadras de esportes para diversas modalidades como, Futsal, Basquete e Vôlei. Também contamos com campo de areia para jogos como vôlei de praia e futvôlei.</p>
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
                                                <h5 class="card-title">Parquinho para crianças</h5>
                                                <p class="card-text">Seu filho tem diversão garantida em nossos parquinhos com diversos brinquedos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Lanches} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Barraquinhas de lanches</h5>
                                                <p class="card-text">Diversas barraquinhas de lanches como Hot-dog, Sorvetes, Churros, Picóle, Pipoca e muito mais.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 card-info">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={Teres} alt="..." className="img-fluid" />
                                        </div>
                                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Teres Regional</h5>
                                                <p class="card-text">Depois de uma intensa atividade física da para relaxar com os amigos batendo um papo e tomando um teres lá pertinho!</p>
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