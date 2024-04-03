import React from "react";
import "./styles.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ status }) => {
  const theme = useTheme();

  return (
    <div className="product-card">
      <section
        className="product-card-header"
        style={{ backgroundColor: theme.palette.violeta.main }}
      >
        <div className="product-card-header-inner-container">
          <Typography
            variant="titulos"
            sx={{ fontSize: "18px", color: theme.palette.blanco.main }}
          >
            Lavanda
          </Typography>
          <Button
            variant="modal"
            sx={{ color: theme.palette.blanco.main, fontWeight: 700 }}
            endIcon={<ChevronRightIcon />}
          >
            Editar
          </Button>
        </div>
      </section>

      <section className="product-card-status-container">
        <div className="product-card-status">
          <figure
            className="status-circle"
            style={{ backgroundColor: theme.palette[status].main }}
          ></figure>
          <Typography
            variant="subtitulos"
            sx={{ fontSize: "16px", fontWeight: 400, ml: "4px" }}
          >
            {status === "postulado" && "Postulado"}
            {status === "exito" && "Aprobado"}
            {status === "revision" && "En revisión"}
            {status === "denegado" && "Denegado"}
          </Typography>
        </div>
      </section>

      <section className="product-card-feedback-container">
        {status === "postulado" && (
          <div className="product-card-feedback">
            <Typography
              variant="titulos"
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                color: theme.palette.violeta.main,
                textAlign: "center",
                mb: 2,
              }}
            >
              ¡Gracias por querer forma parte de EcoSistema!
            </Typography>
            <Typography
              variant="subtitulos"
              sx={{ fontWeight: 500, fontSize: "16px", textAlign: "center", mb: 2 }}
            >
              La postulación de tu Producto/Servicio fue enviada correctamente.
            </Typography>
            <Typography
              variant="parrafos"
              sx={{ fontWeight: 300, fontSize: "16px", textAlign: "center" }}
            >
              Pronto tendrás más novedades.
            </Typography>
          </div>
        )}

        {status === "exito" && (
          <div className="product-card-feedback">
            <Typography
              variant="titulos"
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                color: theme.palette.violeta.main,
                textAlign: "center",
                mb: 2,
              }}
            >
              ¡Felicitaciones! <div>Sos parte de EcoSistema</div>
            </Typography>
            <Typography
              variant="subtitulos"
              sx={{ fontWeight: 600, fontSize: "16px", textAlign: "center" }}
            >
              Tu Producto/Servicios está incluído dentro de nuestra Red de Impacto.
            </Typography>
          </div>
        )}

        {(status === "revision" || status === "denegado") && (
          <div className="product-card-feedback">
            <Typography
              variant="titulos"
              sx={{
                width: "100%",
                fontWeight: 700,
                fontSize: "16px",
                color: theme.palette.violeta.main,
                textAlign: "start",
                mb: 1,
              }}
            >
              Devolución de la administración:
            </Typography>
            <Typography
              variant="subtitulos"
              sx={{
                width: "100%",
                fontWeight: 400,
                fontSize: "16px",
                margin: "0 8px",
                textAlign: "start",
              }}
            >
              Worem ipsum dolor sit amet, consectetur adipiscing elit Worem ipsum dolor sit
              amet, consectetur adipiscing elit. Worem ipsum dolor sit amet, consectetur
              adipiscing elit Worem ipsum dolor sit amet, consectetur adipiscing elit. olor sit
              amet, consectetur adipiscing elit. r sit amet, consectetur adipis.
            </Typography>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductsCard;
