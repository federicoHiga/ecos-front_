import React, { useState } from "react";
import "../../assets/styles/Inicio/inicio.css";
import Searchbar from "../../components/Searchbar";
import useGetByNameHook from "../../utils/services/hooks/getHooks";
import { Typography, useTheme } from "@mui/material";
import {
  NoResultsCard,
  SearchResultCard,
} from "../../components/SearchResultsCards";
import { useLocation } from "react-router";

export default function SearchByChildren({ children }) {
  const theme = useTheme();
  const [searchText, setSearchText] = useState(null);
  const location = useLocation();
  const handleSearch = (evt) => {
    if (evt == "") setSearchText(null);
    else setSearchText(evt);
  };

  const isProveedor = () => {
    return location.pathname === "/proveedores";
  };

  const isPublicacion = () => {
    return location.pathname === "/publicaciones";
  };
  const isHome = () => {
    return location.pathname === "/";
  };
  const background = () =>{
    if(isHome()){
        return "inicio"
    }
    if(isPublicacion()){
        return "inicioPublicacion"
    }
    if(isProveedor()){
        return "inicioProveedor"
    }
  }
  const { data, error, loading } = useGetByNameHook({
    url: "/supplier/searchbyname",
    name: searchText,
  });
  
  console.log(data);
  if (data?.length === 0) {
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
  if (data?.length > 0 && data !== null) {
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
          {data.map((data) => (
            <SearchResultCard key={data.name} supplier={data} />
          ))}
        </section>
      </div>
    );
  }
  return (
    <div>
      <div id={background()}>
        <div id="title">
          <Searchbar functionText={handleSearch} text={searchText} />
          <p>
            {isPublicacion() ? "PUBLICACIONES" : null}
            {isHome() ? "RED DE IMPACTO" : null}
            {isProveedor() ? "PROVEEDORES" : null}
          </p>

          {isPublicacion() ? <h1>Historias de impacto</h1> : null}
          {isProveedor() ? <h1>Directorio ECO</h1> : null}
          <h1>
            {isPublicacion()
              ? "Encontrá inspiración y explorá las noticias y tendencias que están dando forma a un mundo más verde"
              : null}
            {isHome()
              ? "Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente"
              : null}
            {isProveedor()
              ? "Descubrí a quienes comparten tu pasión por el impacto positivo y la sostenibilidad"
              : null}
          </h1>
        </div>
      </div>
      {children}
    </div>
  );
}
