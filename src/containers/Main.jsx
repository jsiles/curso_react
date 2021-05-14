import React, { useState, useEffect } from "react";
import "../styles/main.css";
import { lista } from "../assets/lista";
import Propiedades from "./Propiedades";
import Header from "../components/Header";

const Main = () => {
  const [dataLista, setDataLista] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    setDataLista(lista);
    setCantidad(0);
  }, []);

  // function handleCallback(childData) {
  //     // dataLista = lista;
  //     // cantidad = childData.target.value;
  //     setCantidad(childData.target.value)
  //     setDataLista(lista.filter(x => x.beds>childData.target.value));
  // }

  const handleCallback2 = (childData) => {
    setCantidad(childData.target.value);
    setDataLista(lista.filter((x) => x.beds > childData.target.value));
  };

  return (
    <div className="contenedor">
      <Header parentCallBack={handleCallback2} data_filter={cantidad} />
      <Propiedades title={"Casas en Bolivia"} data={dataLista} />
    </div>
  );
};

export default Main;
