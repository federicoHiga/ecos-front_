import React, { useState } from "react";
import "../../assets/styles/Inicio/inicio.css";
import Proveedores from "../../components/Proveedores";
import ImpactEnterprises from "../../components/ImpactEnterprises";
import CategoriesGrid from "../../components/CategoriesGrid";
import Searchbar from "../../components/Searchbar";
import useGetByNameHook from "../../utils/services/hooks/getHooks";

export default function Inicio() {
  const [searchText, setSearchText] = useState(null);
  const handleSearch = (evt) => {
    if(evt == "") setSearchText(null)
    else setSearchText(evt);
  };

  const { data, error, loading } = useGetByNameHook({
    url: "/supplier/searchbyname",
    name: searchText,
  });



  if(data?.length===0){
    return(
      <div>
         <div id="inicio">
              <div id="title">
                <Searchbar functionText={handleSearch} text={searchText} />
                <p>RED DE IMPACTO</p>
                <h1>
                  Conectamos proveedores y personas comprometidas con el impacto y
                  el consumo consciente viene con error
                </h1>
              </div>
            </div>
      </div>
    )
  }

  if(data?.length >0 && data !==null){
    return(
      <div>
        <div id="inicio">
              <div id="title">
                <Searchbar functionText={handleSearch} text={searchText} />
                <p>RED DE IMPACTO</p>
                <h1>
                  Conectamos proveedores y personas comprometidas con el impacto y
                  el consumo consciente viene con data
                </h1>
              </div>
            </div>
      </div>
    )
  }
  return (
    <div>
      <div id="inicio">
        <div id="title">
          <Searchbar functionText={handleSearch} text={searchText} />
          <p>RED DE IMPACTO</p>
          <h1>
            Conectamos proveedores y personas comprometidas con el impacto y
            el consumo consciente
          </h1>
        </div>
      </div>
      <ImpactEnterprises />
      <Proveedores />
      <CategoriesGrid />
    </div>
  );
}

