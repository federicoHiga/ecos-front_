import { Typography } from "@mui/material";
import "./adminPrincipal.css";
import ProviderCategory from "./providerCategory/providerCategory";
import VisualizacionPublicacion from "./visualizacionPublicacion/visualizacionPublicacion";


export default function AdminPrincipal() {
  return (
    <div className="adminContainer">
      <div className="adminBox">
        <Typography variant="titulos">Dashboard Administrador</Typography>
      <Typography variant="subtitulos">Estadisticas mensuales</Typography>
      <div className="newProfiles">
        <Typography variant="subtitulos"> Nuevos Perfiles Creados:</Typography>
        <Typography variant="subtitulos">100</Typography>
      </div>
      <div className="boxCalculosContainer">
        <div className="boxcalculos box colorAceptado">
          <p className="title">Aprobados</p>
          <p className="count">80</p>
        </div>
          <div className="boxcalculos box colorRevicion">
            <p className="title">Aprobados</p>
            <p className="count">80</p>
          </div>
          <div className="boxcalculos box colorDenegado">
            <p className="title">Aprobados</p>
            <p className="count">80</p>
          </div>
      </div>
      </div>
     <ProviderCategory />
     <VisualizacionPublicacion />
    </div>
  );
}
