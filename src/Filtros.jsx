import React from "react";
import "./styles.css";
import "./trash-alt-solid.svg";

export default function Filtros(props) {
  let {
    pais,
    tamaño,
    precio,
    desde,
    hasta,
    setPais,
    setTamaño,
    setPrecio,
    setDesde,
    setHasta,
    setPaisValor,
    setPrecioValor,
    setTamañoValor,
    setDesdeValor,
    setHastaValor
  } = props;
  return (
    <div className="filtros">
      <FechaIngreso
        desde={desde}
        setDesde={setDesde}
        setDesdeValor={setDesdeValor}
      />
      <FechaEgreso
        hasta={hasta}
        setHasta={setHasta}
        setHastaValor={setHastaValor}
      />
      <CambioDePais pais={pais} setPais={setPais} setPaisValor={setPaisValor} />
      <CambiarElPrecio
        precio={precio}
        setPrecio={setPrecio}
        setPrecioValor={setPrecioValor}
      />
      <CambiarElTamaño
        tamaño={tamaño}
        setTamaño={setTamaño}
        setTamañoValor={setTamañoValor}
      />
      <Reset
        setPais={setPais}
        setTamaño={setTamaño}
        setPrecio={setPrecio}
        setDesde={setDesde}
        setHasta={setHasta}
        setPaisValor={setPaisValor}
        setPrecioValor={setPrecioValor}
        setTamañoValor={setTamañoValor}
        setDesdeValor={setDesdeValor}
        setHastaValor={setHastaValor}
      />
    </div>
  );
}

function FechaIngreso(props) {
  let { desde, setDesde, setDesdeValor } = props;
  let fechaHoy = new Date().toISOString().substring(0, 10);

  let Ingreso = (event) => {
    setDesde(event.target.value);

    let filtroDesde = event.target.value;

    if (filtroDesde !== "") {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      filtroDesde = new Date(
        event.target.value + "T00:00:00"
      ).toLocaleDateString("es-AR", options);

      setDesdeValor("De " + filtroDesde);
    } else {
      setDesdeValor("");
    }
  };

  return (
    <input
      className="input  date"
      type="date"
      onChange={Ingreso}
      value={desde}
      min={fechaHoy}
    />
  );
}

function FechaEgreso(props) {
  let { hasta, setHasta, setHastaValor } = props;
  let fechaHoy = new Date().toISOString().substring(0, 10);

  let Engreso = (event) => {
    setHasta(event.target.value);

    let filtroHasta = event.target.value;

    if (filtroHasta !== "") {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      filtroHasta = new Date(
        event.target.value + "T00:00:00"
      ).toLocaleDateString("es-AR", options);
      setHastaValor(" Hasta " + filtroHasta);
    } else {
      setHastaValor("");
    }
  };

  return (
    <input
      className="input date"
      type="date"
      onChange={Engreso}
      value={hasta}
      min={fechaHoy}
    />
  );
}

function CambioDePais(props) {
  let { pais, setPais, setPaisValor } = props;

  let cambioPais = (event) => {
    setPais(event.target.value);
    setPaisValor("En " + event.target.value);
  };

  return (
    <select onChange={cambioPais} className="input select" value={pais}>
      <option value="cualquier pais" defaultValue>
        Todos los paises
      </option>
      <option value="argentina">Argentina</option>
      <option value="brasil">Brasil</option>
      <option vavlue="chile">Chile</option>
      <option value="uruguay">Uruguay</option>
    </select>
  );
}

function CambiarElPrecio(props) {
  let { precio, setPrecio, setPrecioValor } = props;

  let cambioPrecio = (event) => {
    setPrecio(event.target.value);
    let filtroPrecio = event.target.value;

    if (filtroPrecio === "$") {
      setPrecioValor("De precio economico");
    } else if (filtroPrecio === "$$") {
      setPrecioValor("De precio mediano");
    } else if (filtroPrecio === "$$$") {
      setPrecioValor("De precio alto");
    } else if (filtroPrecio === "$$$$") {
      setPrecioValor("De precio muy alto");
    } else {
      setPrecioValor("De cualquier precio");
    }
  };

  return (
    <select onChange={cambioPrecio} className="input select" value={precio}>
      <option value="De cualquier precio" defaultValue>
        Cualquier precio
      </option>
      <option value="$">$</option>
      <option value="$$">$$</option>
      <option value="$$$">$$$</option>
      <option value="$$$$">$$$$</option>
    </select>
  );
}

function CambiarElTamaño(props) {
  let { tamaño, setTamaño, setTamañoValor } = props;

  let cambioTamaños = (event) => {
    setTamaño(event.target.value);
    let filtroTamaño = event.target.value;

    if (filtroTamaño === "pequeño") {
      setTamañoValor("De tamaño pequeño");
    } else if (filtroTamaño === "mediano") {
      setTamañoValor("De tamaño mediano");
    } else if (filtroTamaño === "grande") {
      setTamañoValor("De tamaño grande");
    } else {
      setTamañoValor("De cualquier tamaño");
    }
  };

  return (
    <select onChange={cambioTamaños} className="input select" value={tamaño}>
      <option value="todosLosTamaños" defaultValue>
        Todos los tamaños
      </option>
      <option value="pequeño">pequeño</option>
      <option value="mediano">mediano</option>
      <option value="grande">grande</option>
    </select>
  );
}

function Reset(props) {
  const {
    setPais,
    setTamaño,
    setPrecio,
    setDesde,
    setHasta,
    setPaisValor,
    setPrecioValor,
    setTamañoValor,
    setDesdeValor,
    setHastaValor
  } = props;
  let reset = () => {
    setPais("En cualquier pais");
    setTamaño("De cualquier tamaño");
    setPrecio("De cualquier precio");
    setDesde("");
    setHasta("");
    setPaisValor("En cualquier pais");
    setPrecioValor("De cualquier precio");
    setTamañoValor("De cualquier tamaño");
    setDesdeValor("");
    setHastaValor("");
  };

  return (
    <button onClick={reset} className="button">
      <img src="./trash-alt-solid.svg" id="trash" alt="" />
    </button>
  );
}
