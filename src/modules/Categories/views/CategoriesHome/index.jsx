import React from "react";
import "./styles.css";
import { CategoriesData } from "../../../../utils/data/categoriesMock";
import Searchbar from "../../../../components/Searchbar";
import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CategoriesHome = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div className="categories-home-screen">
      <header className="categories-home-header">
        <Searchbar />
        <div className="categories-home-screen-title">
          <section className="categories-title-container">
            <Typography
              variant="titulos"
              sx={{ color: theme.palette.blanco.main, fontSize: "18px" }}
            >
              PROVEEDORES
            </Typography>
            <Typography
              variant="subtitulos"
              sx={{ color: theme.palette.blanco.main, fontSize: "28px", mt: "8px" }}
            >
              Directorio ECO
            </Typography>
            <Typography
              variant="subtitulos"
              sx={{
                color: theme.palette.blanco.main,
                fontSize: "24px",
                fontWeight: 400,
                mt: "16px",
              }}
            >
              Descubrí a quienes comparten tu pasión por el impacto positivo y la
              sostenibilidad
            </Typography>
          </section>
        </div>
      </header>
      <section
        className="cagegories-home"
        style={{ backgroundColor: theme.palette.verdes.main }}
      >
        <div className="categories-home-subtitle">
          <Typography variant="titulos" sx={{ fontSize: "24px" }}>
            Categorías
          </Typography>
        </div>
        <div className="categories">
          {CategoriesData.map((category) => (
            <Button
              variant="categories"
              key={category.id}
              sx={{ width: "328px", margin: "0 auto" }}
              onClick={() => navigate(`/categories${category.url}`, { state: { category } })}
            >
              <div className="button-inner-container">
                <section className="button-icon-container">
                  <img
                    src={category.img}
                    alt="imagen característica de la categoría"
                    className="button-category-icon"
                  />
                </section>
                <section className="button-title-container">
                  <Typography
                    variant="subtitulos"
                    sx={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    {category.title}
                  </Typography>
                </section>
              </div>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoriesHome;
