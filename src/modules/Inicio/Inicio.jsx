import React, { useState } from "react";
import "../../assets/styles/Inicio/inicio.css";
import Proveedores from "../../components/Proveedores";
import ImpactEnterprises from "../../components/ImpactEnterprises";
import CategoriesGrid from "../../components/CategoriesGrid";
import Searchbar from "../../components/Searchbar";
import useGetByNameHook from "../../utils/services/hooks/getHooks";
import { Typography, useTheme } from "@mui/material";
import { NoResultsCard, SearchResultCard } from "../../components/SearchResultsCards";
import { SuppliersData } from "../../utils/data/suppliersMock";

export default function Inicio() {
  const theme = useTheme();
  const [searchText, setSearchText] = useState(null);

  const handleSearch = (evt) => {
    if (evt == "") setSearchText(null);
    else setSearchText(evt);
  };

  const { data, error, loading } = useGetByNameHook({
    url: "/supplier/searchbyname",
    name: searchText,
  });

  /* Para ver la card de no resultados, quitar el comentario en la condición  */

  if (data?.length === 0 /* || data === null */) {
    return (
      <div className="search-results-screen">
        <Searchbar functionText={handleSearch} text={searchText} />
        <section className="search-results-title-container">
          <Typography
            variant="h1"
            className="search-results-title"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.titulos.fontWeight,
            }}
          >
            Resultados de tu búsqueda
          </Typography>
        </section>
        <section className="no-results-container">
          <NoResultsCard />
        </section>
      </div>
    );
  }
  // condición original => data?.length > 0 && data !== null
  if (data === null) {
    return (
      <div className="search-results-screen">
        <Searchbar functionText={handleSearch} text={searchText} />
        <section className="search-results-title-container">
          <Typography
            variant="h1"
            className="search-results-title"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.titulos.fontWeight,
            }}
          >
            Resultados de tu búsqueda
          </Typography>
        </section>
        <section className="search-results-grid">
          {SuppliersData.map((data) => (
            <SearchResultCard key={data.name} supplier={data} />
          ))}
        </section>
      </div>
    );
  }
  return (
    <div>
      <div id="inicio">
        <div id="title">
          <Searchbar functionText={handleSearch} text={searchText} />
          <p>RED DE IMPACTO</p>
          <h1>
            Conectamos proveedores y personas comprometidas con el impacto y el consumo
            consciente
          </h1>
        </div>
      </div>
      <ImpactEnterprises />
      <Proveedores />
      <CategoriesGrid />
    </div>
  );
}
