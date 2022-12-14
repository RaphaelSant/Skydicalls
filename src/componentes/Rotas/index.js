import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "../../Paginas/PaginaInicial/index.js";
import Parceiros from "../../Paginas/Parceiros/index.js";
import Contato from "../../Paginas/Contato/index.js";
import SkatePark from "../../Paginas/Locais/SkatePark/index.js";
import EspacoAlternativo from "../../Paginas/Locais/EspacoAlternativo/index.js";
import ParqueCircuito from "../../Paginas/Locais/ParqueCircuito/index.js";
import Mural from "../../Paginas/Mural/index.js";
import AstroSkydicallsEvent from "../../Paginas/Mural/AstroSkydicallsEvent/index.js";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PaginaInicial />} />
                <Route exact path='/parceiros' element={<Parceiros />} />
                <Route exact path='/contato' element={<Contato />} />
                <Route exact path='/skatepark' element={<SkatePark />} />
                <Route exact path='/espacoalternativo' element={<EspacoAlternativo />} />
                <Route exact path='/parquecircuito' element={<ParqueCircuito />} />
                <Route exact path='/mural' element={<Mural />} />
                
                <Route exact path='/mural/AstroSkydicallsEvent' element={<AstroSkydicallsEvent />} />                
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;