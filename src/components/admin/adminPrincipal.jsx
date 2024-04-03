import { Typography } from "@mui/material";
import "./adminPrincipal.css";
import useGetAll from "../../utils/services/hooks/useGetAll";
import ProviderCategory from "./providerCategory/providerCategory";
import VisualizacionPublicacion from "./visualizacionPublicacion/visualizacionPublicacion";

export default function AdminPrincipal() {
  
  const {data, loading, error} = useGetAll({url:"statistics/quantitySupplierByStatus"})

  return (
    <div className="adminContainer">
      <div className="adminBox">
      <div className="ButtonContainer">
        <button className="buttonCerrarSesion"> Cerrar sesión</button>
      </div>
        <Typography variant="titulos">Dashboard Administrador</Typography>
      <Typography variant="subtitulos">Estadisticas mensuales</Typography>
      <div className="newProfiles">
        <Typography variant="subtitulos"> Nuevos Perfiles Creados:</Typography>
        <Typography variant="subtitulos">{data?.data?.newSuppliers||0} </Typography>
      </div>
      <div className="boxCalculosContainer">
        <div className="boxcalculos box colorAceptado">
          <p className="title">Aprobados</p>
          <p className="count">{data?.data?.accepted |0}</p>
        </div>
          <div className="boxcalculos box colorRevicion">
            <p className="title">En revicion</p>
            <p className="count">{data?.data?.review |0}</p>
          </div>
          <div className="boxcalculos box colorDenegado">
            <p className="title">Aprobados</p>
            <p className="count">{data?.data?.denied | "Cargando..."}</p>
          </div>
      </div>
     <ProviderCategory />
     <VisualizacionPublicacion />
    </div>
    </div>
  );
}
