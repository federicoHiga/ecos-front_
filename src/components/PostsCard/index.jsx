import React from "react";
import './styles.css';
import Carrousel from "./Carrousel";
import { Link } from 'react-router-dom';

export default function PostsCard(/*props*/) {
    return (
        <>
        <section className="postsCards-section">
            <h1>¿Qué es el Upcycling?{/*props.title*/}</h1>
            <Carrousel />
            <h2>Fecha{/*props.date*/}</h2>
            <p>El upcycling, también conocido como supra-reciclaje o reutilización creativa, es un enfoque innovador y sostenible para la gestión de residuos y la conservación de recursos.{/*props.text*/}</p>
            <Link to='' className="see-more">Ver más</Link> {/*abre la targeta hacia abajo no lleva a ningun lado, corregir*/}
        </section>
        </>
        
        
    )
}