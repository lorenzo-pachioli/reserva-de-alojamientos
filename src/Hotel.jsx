import React from "react";
import "./styles.css";

export default function Hotel(props) {
  let { precio, desde, hasta } = props;

  function nuevoPrecio(viejoPrecio) {
    let nuevoP;
    if (viejoPrecio === 1) {
      nuevoP = "$";
    } else if (viejoPrecio === 2) {
      nuevoP = "$$";
    } else if (viejoPrecio === 3) {
      nuevoP = "$$$";
    } else {
      nuevoP = "$$$$";
    }
    return nuevoP;
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let desdeNatural = new Date(desde).toLocaleDateString("es-AR", options);
  let hastaNatural = new Date(hasta).toLocaleDateString("es-AR", options);

  return (
    <div className="hotel">
      <img width="100%" src={props.imagen} alt={props.nombre} />
      <h3 className="nombreHotel">{props.nombre}</h3>
      <h4 className="desde">Desde {desdeNatural} </h4>
      <h4 className="hasta">Hasta {hastaNatural} </h4>
      <h6 className="descripcion">{props.descripcion} </h6>
      <div className="ubicacion">
        <div className="img">
          <img src="map-marker-alt-solid.svg" alt="" />
        </div>
        <h5>
          {props.ciudad}, {props.pais}
        </h5>
      </div>
      <div className="precioYTamaño">
        <div className="tamaño">
          <div className="img">
            <img src="bed-solid.svg" alt="" />
          </div>
          <h4>{props.tamaño} habitaciones </h4>
        </div>

        <h4 className="precio">{nuevoPrecio(precio)} </h4>
      </div>
      <div className="boton">
        <button> Reservar</button>
      </div>
    </div>
  );
}
