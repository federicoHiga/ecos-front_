import React from "react";
import "./styles.css";
import Carrousel from "./Carrousel";
import ExpandedCard from "./ExpandedCard";

export default function PostsCard(/*props*/) {

  return (
    <>
      <section className="postsCards-section">
        <h1>¿Qué es el Upcycling?{/*props.title*/}</h1>
        <Carrousel />
        <h2>Fecha{/*props.date*/}</h2>  
        <ExpandedCard />
      </section>
    </>
  );
}
