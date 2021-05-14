import React from 'react'
import '../styles/main.css'
import { lista } from '../assets/lista'
import Propiedades from './Propiedades'
import Header from '../components/Header'

const Main = () => {
    let dataLista = lista;
    let cantidad = 0;

    function handleCallback(childData) {
        dataLista = lista;
        cantidad = childData.target.value;
        console.log(cantidad);
    }
    
    return (
        <div className="contenedor">
            <Header parentCallBack={handleCallback} data_filter={cantidad}/>
            <Propiedades title={"Casas en Bolivia"} data={dataLista.filter(x => x.beds>cantidad)} />
        </div>
    )
}

export default Main