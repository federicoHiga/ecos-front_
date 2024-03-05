import React from 'react'
import '../../assets/styles/Inicio/inicio.css'
import Nav from '../Nav/Nav'
import ImpactEnterprises from '../../components/ImpactEnterprises'

export default function Inicio(){
    return(
        <div>
            <Nav/>
            <div id='inicio'>
                <div id='title'>
                   <p>RED DE IMPACTO</p>
                   <h1>Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente</h1>
                </div>
            </div>
        </div>
    )
}