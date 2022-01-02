import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Filtros from "./Filtros";
import Hoteles from "./Hoteles";
import { hotelsData } from "./hotelsData";
import notMobile from "./not-mobile.webp"

export default function App() {
  const [pais, setPais] = useState("En cualquier pais");
  const [tamaño, setTamaño] = useState("De cualquier tamaño");
  const [precio, setPrecio] = useState("De cualquier precio");
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  let [paisValor, setPaisValor] = useState(pais);
  let [precioValor, setPrecioValor] = useState("De cualquier precio");
  let [tamañoValor, setTamañoValor] = useState("De cualquier tamaño");
  let [desdeValor, setDesdeValor] = useState("");
  let [hastaValor, setHastaValor] = useState("");

  return (
    <div className="App">
      <div className="web">
        <Header
          paisValor={paisValor}
          precioValor={precioValor}
          tamañoValor={tamañoValor}
          desdeValor={desdeValor}
          hastaValor={hastaValor}
        />
        <Filtros
          pais={pais}
          tamaño={tamaño}
          precio={precio}
          desde={desde}
          hasta={hasta}
          setPrecio={setPrecio}
          setTamaño={setTamaño}
          setPais={setPais}
          setDesde={setDesde}
          setHasta={setHasta}
          setPaisValor={setPaisValor}
          setPrecioValor={setPrecioValor}
          setTamañoValor={setTamañoValor}
          setDesdeValor={setDesdeValor}
          setHastaValor={setHastaValor}
        />
        <Hoteles
          listaHoteles={hotelsData}
          pais={pais}
          tamaño={tamaño}
          precio={precio}
          desde={desde}
          hasta={hasta}
        />
      </div>
      
      <div className="not-mobile">
        <h1>Uppss, this web site is still not available on mobile devices</h1>
        <img src={notMobile}  alt="img not found" />
      </div>
    </div>
  );
}
