import React from "react";
import '../styles/header.css'
import logo from "../assets/triangle.svg"

const Header = (props) => {
  return (
    <div className="contenedorHeader">
        <div className="leftDiv">
            <img src={logo} className="logoWinbnb" />
                <span>winbnb</span>
        </div>
        <div className="rightDiv rectangle"> 
        Filtrar: {props.data_filter} -
                <select onChange={props.parentCallBack} defaultValue={props.data_filter}> 
                    <option value="0">Todos</option>
                    <option value="2">2 beds +</option>
                    <option value="3">3 beds +</option>
                    <option value="4">4 beds +</option>
                    <option value="5">5 beds +</option>
                    <option value="6">6 beds +</option>
                </select>
        </div>
    </div>
  );
  
};

export default Header;
