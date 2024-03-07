import React from "react";
import './styles.css';
import Carrousel from "./Carrousel/Carrousel";

export default function PublicacionesCards (/*props*/) {
    return(
        <section className="PublicacionesCards-section">
            <h1>¿Qué es el Upcycling?{/*props.title*/}</h1>
            <Carrousel />
            <h2>Fecha{/*props.date*/}</h2>
            <p>El upcycling, también conocido como supra-reciclaje o reutilización creativa, es un enfoque innovador y sostenible para la gestión de residuos y la conservación de recursos.{/*props.text*/}</p>
            <button>Ver más</button>
        </section>
    )
}