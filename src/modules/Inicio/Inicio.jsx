import React from "react";
import "../../assets/styles/Inicio/inicio.css";
import NavGlobal from "../Nav/NavGlobal";
import Searchbar from "../../components/Searchbar";
import ImpactEnterprises from "../../components/ImpactEnterprises";
import CategoriesGrid from "../../components/CategoriesGrid";

export default function Inicio() {
  return (
    <div className="landing-page">
      <NavGlobal />
      <div id="inicio">
        <Searchbar />
        <div id="title">
          <p>RED DE IMPACTO</p>
          <h1>
            Conectamos proveedores y personas comprometidas con el impacto y el consumo
            consciente
          </h1>
        </div>
      </div>
      <ImpactEnterprises />
      <CategoriesGrid />
    </div>
  );
}
