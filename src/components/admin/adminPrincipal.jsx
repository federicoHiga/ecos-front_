import { Typography } from "@mui/material";
import "./adminPrincipal.css";
import ProviderCategory from "./providerCategory";
import VisualizacionPublicacion from "./visualizacionPublicacion";

export default function AdminPrincipal() {
  return (
    <div class="container">
      <Typography variant="titulos">Dashboard Administrador</Typography>
      <Typography variant="subtitulos">Estadisticas mensuales</Typography>
      <div class="newProfiles">
        <Typography variant="subtitulos"> Nuevos Perfiles Creados:</Typography>
        <Typography variant="subtitulos">100</Typography>
      </div>
      <div class="boxCalculosContainer">
        <div class="boxcalculos box colorAceptado">
          <p class="title">Aprobados</p>
          <p class="count">80</p>
        </div>
          <div class="boxcalculos box colorRevicion">
            <p class="title">Aprobados</p>
            <p class="count">80</p>
          </div>
          <div class="boxcalculos box colorDenegado">
            <p class="title">Aprobados</p>
            <p class="count">80</p>
          </div>
      </div>
      <ProviderCategory />
      <VisualizacionPublicacion />
    </div>
  );
}
