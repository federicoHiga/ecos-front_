import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Button, useTheme } from "@mui/material";
import { CategoriesData } from "../../utils/data/categoriesMock";

const CategoriesGrid = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div className="categories-section">
      <h6>Red de Proveedores ECO</h6>
      <h3>Categorías</h3>
      <section className="categories-grid">
        {CategoriesData.slice(0, 8).map((category) => (
          <Button
            variant="categories"
            className="categories-grid-button"
            key={category.id}
            onClick={() => navigate(`/providers${category.url}`, { state: { category } })}
          >
            <div className="button-inner-wrapper">
              <section className="grid-item-icon-container">
                <img src={category.img} alt={category.title} />
              </section>
              <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
                {category.title}
              </h6>
            </div>
          </Button>
        ))}
      </section>
      <section>
        <Button
          variant="purple"
          sx={{ padding: "10px 24px" }}
          onClick={() => navigate("/providers")}
        >
          Ver más categorías
        </Button>
      </section>
    </div>
  );
};

export default CategoriesGrid;
