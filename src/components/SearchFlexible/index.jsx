import React, { useState } from "react";
import "../../assets/styles/Inicio/inicio.css";
import Searchbar from "../../components/Searchbar";
import useGetByNameHook from "../../utils/services/hooks/getHooks";
import { Typography, useTheme } from "@mui/material";
import { NoResultsCard, SearchResultCard } from "../../components/SearchResultsCards";
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
    return (
      location.pathname === "/providers" || location.pathname.split("/")[1] === "providers"
    );
  };

  const isPublicacion = () => {
    return location.pathname === "/posts";
  };
  const isHome = () => {
    return location.pathname === "/";
  };

  const background = () => {
    if (isHome()) {
      return "home";
    }
    if (isPublicacion()) {
      return "home-posts";
    }
    if (isProveedor()) {
      return "home-providers";
    }
  };

  const { data, error, loading } = useGetByNameHook({
    url: "/supplier/searchbyname",
    name: searchText,
  });
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
    <div className="home-page">
      <header className={background()}>
        <Searchbar functionText={handleSearch} text={searchText} />
        <section className="home-title-container">
          <Typography
            variant="titulos"
            sx={{ fontSize: "18px", color: theme.palette.blanco.main, mb: "8px" }}
          >
            {isPublicacion() && "PUBLICACIONES"}
            {isHome() && "RED DE IMPACTO"}
            {isProveedor() && "PROVEEDORES"}
          </Typography>
          <Typography
            variant="subtitulos"
            className="home-subtitles"
            sx={{
              fontSize: "28px",
              fontWeight: 500,
              color: theme.palette.blanco.main,
              mb: "16px",
              width: "240px",
            }}
          >
            {isHome() &&
              "Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente"}
            {isPublicacion() && "Historias de impacto"}
            {isProveedor() && "Directorio ECO"}
          </Typography>
          <Typography
            variant="subtitulos"
            className="home-subtitles"
            sx={{
              fontSize: "24px",
              fontWeight: 400,
              color: theme.palette.blanco.main,
              width: "240px",
            }}
          >
            {isPublicacion() &&
              "Encontrá inspiración y explorá las noticias y tendencias que están dando forma a un mundo más verde"}
            {isProveedor() &&
              "Descubrí a quienes comparten tu pasión por el impacto positivo y la sostenibilidad"}
          </Typography>
        </section>
      </header>
      {children}
    </div>
  );
}
