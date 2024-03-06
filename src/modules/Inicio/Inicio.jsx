import React from 'react'
import '../../assets/styles/Inicio/inicio.css'
import NavGlobal from '../Nav/NavGlobal'
import Proveedores from '../../components/Proveedores'

export default function Inicio(){
    return(
        <div>
            <NavGlobal/>
            <div id='inicio'>
                <div id='title'>
                   <p>RED DE IMPACTO</p>
                   <h1>Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente</h1>
                </div>
            </div>
            <Proveedores />
        </div>
    )
}