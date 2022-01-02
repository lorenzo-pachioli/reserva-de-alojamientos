import React from "react";
import "./styles.css";

export default function Header(props) {
  let { paisValor, precioValor, tamañoValor, desdeValor, hastaValor } = props;

  const fechas = (fecha) => {
    if (desdeValor === "" && hastaValor === "") {
      return "En cualquier fecha";
    } else {
      return "";
    }
  };

  return (
    <div className="header">
      <h1>Hoteles</h1>
      <h5>{fechas()} </h5>
      <h5>
        {desdeValor}
        {hastaValor}
      </h5>
      <h5> {paisValor} </h5>
      <h5>{precioValor} </h5>
      <h5>{tamañoValor} </h5>
    </div>
  );
}
