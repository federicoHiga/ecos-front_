import React from "react";
import "./styles.css";
import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CategoriesData } from "../../../utils/data/categoriesMock";
import SearchByChildren from "../../../components/SearchFlexible";
import useGetAll from "../../../utils/services/hooks/useGetAll";

const ProvidersHome = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, error, loading } = useGetAll({ url: "category" });

  //TODO recorrer esta data en la vista, una vez que estén terminados los cambios del JSON
  console.log("HOOK DATA: ", data?.data);

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
              onClick={() =>
                navigate(`/providers/${category.category}`, { state: { category } })
              }
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
                    {category.category}
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
