import React from 'react'
import Home from '../components/Home'
import '../styles/main.css'


const Propiedades = (props) => {
    return (
        <div >
            <Home title={props.title} data={props.data} />
        </div>
    )
}

export default Propiedades
