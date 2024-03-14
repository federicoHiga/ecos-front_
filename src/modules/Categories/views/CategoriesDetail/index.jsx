import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

const CategoriesDetail = () => {
  const { state } = useLocation();
  console.log("STATE: ", state.category);

  return (
    <div className="categories-detail-screen" >
      <div>CategoriesDetail</div>
    </div>
  );
};

export default CategoriesDetail;
