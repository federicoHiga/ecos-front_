import { Typography } from "@mui/material";
import "./adminPrincipal.css";
import ProviderCategory from "./providerCategory";
import VisualizacionPublicacion from "./visualizacionPublicacion";
import useGetAll from "../../utils/services/hooks/useGetAll";

export default function AdminPrincipal() {
  
  const {data, loading, error} = useGetAll({url:"statistics/quantitySupplierByStatus"})

  return (
    <div class="container">
      <div class="ButtonContainer">
        <button className="buttonCerrarSesion"> Cerrar sesión</button>
      </div>
      <Typography variant="titulos">Dashboard Administrador</Typography>
      <Typography variant="subtitulos">Estadisticas mensuales</Typography>
      <div class="newProfiles">
        <Typography variant="subtitulos"> Nuevos Perfiles Creados:</Typography>
        <Typography variant="subtitulos">100</Typography>
      </div>
      <div class="boxCalculosContainer">
        <div class="boxcalculos box colorAceptado">
          <p class="title">Aprobados</p>
          <p class="count">{data?.data?.accepted |0}</p>
        </div>
          <div class="boxcalculos box colorRevicion">
            <p class="title">En revicion</p>
            <p class="count">{data?.data?.review |0} </p>
          </div>
          <div class="boxcalculos box colorDenegado">
            <p class="title">Aprobados</p>
            <p class="count">{data?.data?.denied | "Cargando..."} </p>
          </div>
      </div>
      <ProviderCategory />
      <VisualizacionPublicacion />
    </div>
  );
}
