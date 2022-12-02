import React from "react";
import Helmet from 'react-helmet';
import Promocoes from "../../Assets/imagens/home/Promocoes.jpg";
import Localidades from "../../Assets/imagens/home/Espacoalternativo.jpg";
import Eventos from "../../Assets/imagens/home/Eventos.jpg";
import Mural from "../../Assets/imagens/home/Mural.png";
import Locais from "../../Assets/imagens/home/Localidades.png";
import Cabecalho from "../../componentes/Cabecalho/index.js";
import Rodape from "../../componentes/Rodape/index.js";
import "./paginainicialEstilo.css";
import "../../Assets/funcoes/reveal.js";

function PaginaInicial() {
    return (
        <>
            <Helmet title="Skydicalls - Página inicial" />
            <Cabecalho />

            <div id="carouselExampleCaptions" class="carousel slide HomeCarousel" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Eventos} class="d-block w-100 imgHomeCarousel" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Eventos</h5>
                            <p>Veja os eventos que aconteceram e o que estão por vir!!!.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Promocoes} class="d-block w-100 imgHomeCarousel" alt="..." />
                        <div class="carousel-caption d-none d-md-block" >
                            <h5>Promoções</h5>
                            <p>Fique por dentro das promoções em equipamentos esportivos.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Localidades} class="d-block w-100 imgHomeCarousel" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Localidades esportivas</h5>
                            <p>Aqui você acompanha as localidades atualizadas para a prática esportiva.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <section className="mural reveal">
                    <img src={Mural} className="muralImg" alt="Mural de fotos" />
                    <div>
                        <h3>Transmissão de eventos</h3>
                        <ul>
                            <li>Eventos locais</li>
                            <li>Atletas regionais</li>
                            <li>Torneio de atléticas</li>
                        </ul>
                    </div>
                </section>
                <section className="mural locais reveal">
                    <div className="text-end">
                        <h3>Locais</h3>
                        <p>Consulte os locais reservados para a praticas esportiva de diversas modalidades</p>
                    </div>
                    <img src={Locais} className="muralImg" alt="Mural de fotos" />
                </section>
                <Rodape />
            </div>
        </>
    );
}

export default PaginaInicial;