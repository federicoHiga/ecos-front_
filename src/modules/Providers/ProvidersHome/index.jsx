import React from "react";
import "./styles.css";
import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CategoriesData } from "../../../utils/data/categoriesMock";
import SearchByChildren from "../../../components/SearchFlexible";

const ProvidersHome = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <SearchByChildren>
      <section
        className="providers-home"
        style={{ backgroundColor: theme.palette.verdes.main }}
      >
        <div className="providers-home-subtitle">
          <Typography variant="titulos" sx={{ fontSize: "24px" }}>
            Categorías
          </Typography>
        </div>
        <div className="providers">
          {CategoriesData.map((category) => (
            <Button
              variant="categories"
              key={category.id}
              sx={{ width: "328px", margin: "0 auto" }}
              onClick={() => navigate(`/providers${category.url}`, { state: { category } })}
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
    </SearchByChildren>
  );
};

export default ProvidersHome;
