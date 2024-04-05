/* eslint-disable react/prop-types */
import React from "react";
import "./styles.css";
import Carrousel from "./Carrousel";
import ExpandedCard from "./ExpandedCard";

export default function PostsCard({ post, images }) {
  const { title, fechaCreacion, description } = post;

  return (
    <>
      <section className="postsCards-section">
        <h1>{title}</h1>
        <Carrousel images={images} />
        <h2>{new Date(fechaCreacion).toLocaleDateString()}</h2>
        <ExpandedCard description={description} />
      </section>
    </>
  );
}
