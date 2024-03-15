import React from "react";
import "./styles.css";
import SearchByChildren from "../../../components/SearchFlexible";
import { Typography, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { SearchResultCard } from "../../../components/SearchResultsCards";
import { SuppliersData } from "../../../utils/data/suppliersMock";

const ProvidersDetail = () => {
  const theme = useTheme();
  const { state } = useLocation();
  console.log("STATE: ", state.category);

  return (
    <SearchByChildren>
      <section className="providers-detail-screen">
        <div className="providers-detail-inner-wrapper">
          <div className="providers-detail-title-container">
            <Typography
              variant="titulos"
              sx={{ fontSize: "24px", color: theme.palette.negro.main, mb: "32px" }}
            >
              Categorías
            </Typography>
            <Typography
              variant="subtitulos"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: theme.palette.violeta.main,
              }}
            >
              {state.category.title}
            </Typography>
          </div>
        </div>
        <div
          className="providers-detail"
          style={{ backgroundColor: theme.palette.verdes.main }}
        >
          <div className="providers-detail-desc-container">
            <Typography
              variant="subtitulos"
              sx={{
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              Encontrá desde productos cosméticos y de cuidado personal natural, servicios de
              salud, hasta terapias holísticas y más.
            </Typography>
          </div>
          
          <section className="providers-grid">
            {SuppliersData.map((provider) => (
              <SearchResultCard supplier={provider} key={provider.id} />
            ))}
          </section>
        </div>
      </section>
    </SearchByChildren>
  );
};

export default ProvidersDetail;
