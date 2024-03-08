import React from "react";
import "../../assets/styles/Inicio/inicio.css";
import PostsSection from "../PostsSection/index";
import ImpactEnterprises from "../../components/ImpactEnterprises";
import CategoriesGrid from "../../components/CategoriesGrid";
import SuppliersSection from "../SuppliersSection";

export default function Inicio() {
  return (
    <div>
      <div id="inicio">
        <div id="title">
          <p>RED DE IMPACTO</p>
          <h1>
            Conectamos proveedores y personas comprometidas con el impacto y el
            consumo consciente
          </h1>
        </div>
      </div>      
      <ImpactEnterprises />
      <SuppliersSection/>
      <CategoriesGrid />
      <PostsSection />
    </div>
  );
}
