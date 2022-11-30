import React from "react";
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import Centauro from "../../Assets/imagens/parceiros/centauro.png";
import SkateDosSonhos from "../../Assets/imagens/parceiros/skatedossonhos.png"
import Nike from "../../Assets/imagens/parceiros/nike.png"
import RedbullSkate from "../../Assets/imagens/parceiros/redbull-skate-generation.png"
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import "./estiloParceiros.css";

function Parceiros() {
    <Helmet title="Skydicalls - Parceiros" />
    return (
        <>
            <Helmet title="Skydicalls - Parceiros" />
            <Cabecalho />

            <div className="container-sm mt-3 principal">
                <h1 className="text-center p-4">Parceiros</h1>

                <div className="parceiros d-flex flex-column justify-content-center align-items-center">

                    <div class="card mb-3 card-info card-parceiros">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={Centauro} alt="..." className="img-fluid img-card" />
                            </div>
                            <div class="col-md-8 d-flex align-items-center justify-content-center">
                                <div class="card-body">
                                    <h5 class="card-title">Centauro</h5>
                                    <p class="card-text">Loja de tênis, roupas fitness, aparelhos de academia e material esportivo nos menores preços para comprar online até 12x!</p>
                                    <button type="button" class="btn btn-dark bnt-info" data-bs-toggle="modal" data-bs-target="#modalCentauro">
                                        Mais informações
                                    </button>

                                    <div class="modal fade" id="modalCentauro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Centauro</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="card d-flex flex-column justify-content-center align-items-center">
                                                        <img src={Centauro} alt="..." class="img-card-modal" />
                                                        <div class="card-body">
                                                            <p class="card-text">Av. Pref. Chiquilito Erse, 3288 - Flodoaldo Pontes Pinto, Porto Velho - RO, 76820-408</p>
                                                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                                                <p className="m-0 text-start">Segunda-feira a Sábado: 10:00 às 22:00 <br />
                                                                    Domingo: 12:00 às 21:00 <br /></p>
                                                            </div>

                                                            <iframe className="mt-2" title="Mapa espaço alternativo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.40485362275!2d-63.878327182556156!3d-8.747923700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cb2a25c6909%3A0x54021baed84bbefd!2sCentauro!5e0!3m2!1spt-BR!2sbr!4v1669769379488!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="card mb-3 card-info card-parceiros">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={SkateDosSonhos} alt="..." className="img-fluid img-card" />
                            </div>
                            <div class="col-md-8 d-flex align-items-center justify-content-center">
                                <div class="card-body">
                                    <h5 class="card-title">Skate dos Sonhos</h5>
                                    <p class="card-text">Na Skate dos Sonhos, você encontra os melhores produtos para seu skate, além de tênis, roupas e acessórios de alta qualidade. A Skate Shop mais completa do país! Acesse agora!</p>
                                    <button type="button" class="btn btn-dark bnt-info" data-bs-toggle="modal" data-bs-target="#modalSakateDosSonhos">
                                        Mais informações
                                    </button>

                                    <div class="modal fade" id="modalSakateDosSonhos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Skate dos Sonhos</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="card d-flex flex-column justify-content-center align-items-center">
                                                        <img src={SkateDosSonhos} alt="..." class="img-card-modal" />
                                                        <div class="card-body">
                                                            <p class="card-text">Rua Augusto Tolle, 538 - Santana, São Paulo - SP, 02405-000</p>
                                                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                                                <p className="m-0 text-start">
                                                                    terça-feira, 10:00–19:00 <br />
                                                                    quarta-feira, 10:00–20:00 <br />
                                                                    quinta-feira, 10:00–20:00 <br />
                                                                    sexta-feira, 10:00–14:00 <br />
                                                                    sábado, 10:00–19:00 <br />
                                                                    domingo, Fechado <br />
                                                                    segunda-feira, Fechado <br />
                                                                </p>
                                                            </div>

                                                            <iframe className="mt-2" title="Mapa espaço alternativo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.217700482203!2d-46.63675178322095!3d-23.488666923056428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef72013e2dbf5%3A0xae84a2e98066ccc1!2sSkate%20dos%20Sonhos!5e0!3m2!1spt-BR!2sbr!4v1669769844937!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 card-info card-parceiros">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={Nike} alt="..." className="img-fluid img-card" />
                            </div>
                            <div class="col-md-8 d-flex align-items-center justify-content-center">
                                <div class="card-body">
                                    <h5 class="card-title">Nike</h5>
                                    <p class="card-text">A Nike oferece produtos, experiências e serviços inovadores para inspirar atletas.</p>
                                    <button type="button" class="btn btn-dark bnt-info" data-bs-toggle="modal" data-bs-target="#modalNike">
                                        Mais informações
                                    </button>

                                    <div class="modal fade" id="modalNike" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Nike</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="card d-flex flex-column justify-content-center align-items-center">
                                                        <img src={Nike} alt="..." class="img-card-modal" />
                                                        <div class="card-body">
                                                            <p class="card-text">Huanhuali 15-147, La Serena, Coquimbo, Chile</p>
                                                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                                                <p className="m-0 text-start">
                                                                    segunda-feira, 10:00–21:00 <br />
                                                                    terça-feira, 10:00–21:00 <br />
                                                                    quarta-feira, 10:00–21:00 <br />
                                                                    quinta-feira, 10:00–21:00 <br />
                                                                    sexta-feira, 10:00–21:00 <br />
                                                                    sábado, 10:00–21:00 <br />
                                                                    domingo, 10:00–21:00 <br />
                                                                </p>
                                                            </div>

                                                            <iframe className="mt-2" title="Mapa espaço alternativo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.247785107398!2d-71.26051608533601!3d-29.9147679322166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca6bdb881b35%3A0xfff88cc9507ded22!2sNike!5e0!3m2!1spt-BR!2sbr!4v1669770371047!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 card-info card-parceiros">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={RedbullSkate} alt="..." className="img-fluid img-card" />
                            </div>
                            <div class="col-md-8 d-flex align-items-center justify-content-center">
                                <div class="card-body">
                                    <h5 class="card-title">RedBull</h5>
                                    <p class="card-text">Encontra as últimas notícias, eventos, livestreams, videos e fotos do mundo Red Bull e mais além, incluindo motorsports, bike, neve, surf, música e muito mais.</p>
                                    <button type="button" class="btn btn-dark bnt-info" data-bs-toggle="modal" data-bs-target="#modalRedBull">
                                        Mais informações
                                    </button>

                                    <div class="modal fade" id="modalRedBull" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">RedBull</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="card d-flex flex-column justify-content-center align-items-center">
                                                        <img src={RedbullSkate} alt="..." class="img-card-modal" />
                                                        <div class="card-body">
                                                            <p class="card-text">Av. Cidade Jardim, 350 - Itaim Bibi, São Paulo - SP, 01451-010</p>
                                                            <div className="mensagem-header bg-dark text-light text-center p-2 rounded">
                                                                <p className="m-0 text-start">
                                                                    http://www.redbull.com.br/ <br />
                                                                    01130162855 <br />
                                                                </p>
                                                            </div>

                                                            <iframe className="mt-2" title="Mapa espaço alternativo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744427.8493348532!2d-50.9027675!3d-23.580370900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce576940f7cac3%3A0x548768d05189c5a5!2sRed%20Bull%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1669770745886!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-dark" type="button"><Link to="/" className="link-bnt">Voltar para pagina Inicial</Link></button>
                </div>

            </div>



            <Rodape />
        </>
    );
}

export default Parceiros;