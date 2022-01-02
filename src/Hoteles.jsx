import React, { useState } from "react";
import "./styles.css";
import Hotel from "./Hotel";

export default function Hoteles(props) {
  let { pais, tamaño, precio, desde, hasta } = props;
  let [estadoLista, setestadoLista] = useState(18);
  let fechaHoy = new Date().setHours(0, 0, 0, 0);

  const filtradosPorPais = props.listaHoteles.filter((hotel) => {
    if (pais === "cualquier pais" || pais === "En cualquier pais") {
      return true;
    } else {
      return hotel.country.toLowerCase() === pais.toLowerCase();
    }
  });

  const filtradosPorPaisYTamaño = filtradosPorPais.filter((hotel) => {
    if (tamaño === "De cualquier tamaño") {
      return true;
    } else {
      if (tamaño === "pequeño") {
        return hotel.rooms <= 10;
      } else if (tamaño === "mediano") {
        return hotel.rooms > 10 && hotel.rooms <= 20;
      } else {
        return hotel.rooms > 20;
      }
    }
  });

  const filtradosPorPaisTamañoYPrecio = filtradosPorPaisYTamaño.filter(
    (hotel) => {
      if (precio === "De cualquier precio") {
        return true;
      } else {
        let filtroPrecio = precio.length;
        return hotel.price === filtroPrecio;
      }
    }
  );

  const filtradosPorPaisTamañoPrecioYDesde = filtradosPorPaisTamañoYPrecio.filter(
    (hotel) => {
      let fecha = new Date(desde + "T00:00:00");
      let fechaUnix = fecha.getTime();

      if (desde === "") {
        return true;
      } else if (fechaUnix < fechaHoy) {
        return false;
      } else {
        if (fechaUnix >= hotel.availabilityFrom) {
          return true;
        } else {
          return false;
        }
      }
    }
  );

  let filtradosPorPaisTamañoPrecioDesdeYHasta = filtradosPorPaisTamañoPrecioYDesde.filter(
    (hotel) => {
      let fecha = new Date(hasta + "T00:00:00");
      let fechaUnix = fecha.getTime();

      if (hasta === "") {
        return true;
      } else if (hasta < desde) {
        return false;
      } else if (fechaUnix < fechaHoy) {
        return false;
      } else {
        if (fechaUnix <= hotel.availabilityTo) {
          return true;
        } else {
          return false;
        }
      }
    }
  );

  function NoEncontro() {
    setestadoLista(filtradosPorPaisTamañoPrecioDesdeYHasta.length);
    let fecha = new Date(desde + "T00:00:00");
    let fechaUnix = fecha.getTime();
    

    if (estadoLista === 0 && fechaUnix >= fechaHoy && desde < hasta) {
      return (
        <div>
          <h2 className="alerta">
            No se encontraron hoteles segun su busqueda
          </h2>
        </div>
      );
    } else if (estadoLista === 0 && (fechaUnix < fechaHoy || hasta < desde)) {
      console.log("alerta fecha");
      return (
        <div id="alerta">
          <h2 className="alerta">La fecha seleccionada es incorrecta</h2>
        </div>
      );
    } else if (estadoLista === 0) {
      return (
        <div>
          <h2 className="alerta">
            No se encontraron hoteles segun su busqueda
          </h2>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div>
      <div className="hoteles" id="hoteles">
        {filtradosPorPaisTamañoPrecioDesdeYHasta.map((hotel) => {
          return (
            <Hotel
              key={hotel.name}
              nombre={hotel.name}
              pais={hotel.country}
              ciudad={hotel.city}
              imagen={hotel.photo}
              precio={hotel.price}
              tamaño={hotel.rooms}
              desde={hotel.availabilityFrom}
              hasta={hotel.availabilityTo}
              descripcion={hotel.description}
            />
          );
        })}
      </div>

      <NoEncontro />
    </div>
  );
}
