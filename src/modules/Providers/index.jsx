import React, { useState } from "react";
import "../../assets/styles/Inicio/inicio.css";

import SearchByChildren from "../../components/SearchFlexible";

export default function Providers() {
  return (
    <div>
      <SearchByChildren>
       <div>
        <h1>Estoy en provider</h1>
       </div>
      </SearchByChildren>
    </div>
  );
}