/* eslint-disable react/prop-types */
import { useState } from "react";
import { Collapse, IconButton, Typography, useTheme } from "@mui/material";
import "./styles.css";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const NoResultsCard = () => {
  const theme = useTheme();

  return (
    <div className="no-results-card">
      <section className="no-results-icon-container">
        <SearchOffIcon sx={{ color: theme.palette.violeta.main, fontSize: "48px" }} />
      </section>
      <section className="no-results-text-container">
        <Typography
          variant="h2"
          sx={{ fontFamily: theme.typography.fontFamily, color: theme.palette.violeta.main }}
          className="no-results-title"
        >
          No se encontraron resultados para tu búsqueda
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.negro,
            fontWeight: theme.typography.subtitulos.fontWeight,
          }}
        >
          Intentá nuevamente con otra consulta
        </Typography>
      </section>
    </div>
  );
};

export const SearchResultCard = ({ supplier }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(-1);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? -1 : id);
  };

  return (
    <div
      className="search-result-card"
      style={{ height: expanded === supplier.id ? "max-content" : "min-content" }}
    >
      <div className="search-result-wrapper">
        <section className="search-result-product-header">
          <div className="search-result-category-container">
            <Typography
              className="search-result-category"
              sx={{
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.violeta.main,
                fontSize: "13px",
                lineHeight: "18px",
              }}
            >
              {supplier.category.category}
            </Typography>
          </div>
          <img className="search-result-image" alt="Imagen ilustrativa" src={supplier.image} />
        </section>

        <section className="search-result-product-data-container">
          <Typography
            variant="subtitle1"
            className="search-result-title"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "18px",
              fontWeight: theme.typography.subtitulos.fontWeight,
              lineHeight: "25px",
            }}
          >
            {supplier.name}
          </Typography>
          <Typography
            variant="subtitle"
            className="search-result-subtitle"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: "18px",
              color: theme.palette.violeta.main,
            }}
          >
            Breve descripcion
          </Typography>

          <section className="search-result-location-container">
            <div className="location-icon-container">
              <LocationOnOutlinedIcon
                sx={{ color: theme.palette.violeta.main, width: "20px", height: "20px" }}
              />
            </div>
            <Typography
              variant="body1"
              className="search-result-location"
              sx={{ fontFamily: theme.typography.fontFamily }}
            >
              Godoy Cruz, Mendoza, Argentina
            </Typography>
          </section>
        </section>
      </div>
      <IconButton
        className="search-result-card-footer"
        onClick={() => handleExpand(supplier.id)}
        aria-expanded={expanded === supplier.id}
        aria-label="show-more"
        sx={{ marginTop: "8px" }}
      >
        <ExpandMoreIcon
          sx={{
            width: "24px",
            height: "20px",
            color: theme.palette.violeta.main,
            transform: !(expanded === supplier.id) ? "rotate(0deg)" : "rotate(180deg)",
            transition: theme.transitions.create("transform", {
              duration: theme.transitions.duration.shortest,
            }),
          }}
        />
      </IconButton>

      <Collapse
        in={expanded === supplier.id}
        out={expanded === supplier.id}
        timeout={"auto"}
        unmountOnExit
        className="search-result-card-hidden-content"
      >
        <Typography
          variant="body1"
          className="search-result-card-description"
          sx={{
            padding: "0px",
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {supplier.description}
        </Typography>

        <section className="search-result-card-contact">
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "16px",
              fontWeight: theme.typography.subtitulos.fontWeight,
              lineHeight: "25px",
              padding: 0,
            }}
          >
            Contactanos
          </Typography>

          <div className="search-result-social-media-container">
            <figure className="search-result-social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="search-result-social-media-icon-container"
              >
                <WhatsAppIcon
                  sx={{ width: "24px", height: "24px", color: theme.palette.violeta.main }}
                />
              </a>
              <figcaption className="search-result-social-media-title">Whatsapp</figcaption>
            </figure>
            <figure className="search-result-social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="search-result-social-media-icon-container"
              >
                <InstagramIcon
                  sx={{ width: "24px", height: "24px", color: theme.palette.violeta.main }}
                />
              </a>
              <figcaption className="search-result-social-media-title">Instagram</figcaption>
            </figure>
            <figure className="search-result-social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="search-result-social-media-icon-container"
              >
                <FacebookIcon
                  sx={{ width: "24px", height: "24px", color: theme.palette.violeta.main }}
                />
              </a>
              <figcaption className="search-result-social-media-title">Facebook</figcaption>
            </figure>
            <figure className="search-result-social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="search-result-social-media-icon-container"
              >
                <EmailOutlinedIcon
                  sx={{ width: "24px", height: "24px", color: theme.palette.violeta.main }}
                />
              </a>
              <figcaption className="search-result-social-media-title">Mail</figcaption>
            </figure>
          </div>
        </section>
      </Collapse>
    </div>
  );
};
