import React from "react";
import "./styles.css";
import Carrousel from "./Carrousel";
import ExpandedCard from "./ExpandedCard";

export default function PostsCard(props) {
  const { title, img1, img2, img3, date, description } = props;

  return (
    <>
      <section className="postsCards-section">
        <h1>{title}</h1>
        <Carrousel img1={img1} img2={img2} img3={img3} />
        <h2>{date}</h2>
        <ExpandedCard description={description} />
      </section>
    </>
  );
}
