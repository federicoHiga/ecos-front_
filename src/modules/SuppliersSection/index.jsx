/* eslint-disable react/prop-types */
import Invitacion from "../../modules/invitacion/Invitacion";
import SuppliersCard from "../../components/SuppliersCard";
import "./styles.css";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

function SuppliersSection({ suppliers }) {
  const theme = useTheme();
  
  return (
    <>
      <Invitacion />
      <div>
        <Box
          className="recomendaciones"
          sx={{
            marginLeft: 2,
            fontSize: "16px",
          }}
        >
          <h3
            style={{
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Recomendaciones locales para vos{/*props.recomendaciones*/}
          </h3>
        </Box>
        <Box
          className="proveedores"
          sx={{
            fontWeight: "bold",
            margin: 2,
            fontSize: "22px",
          }}
        >
          <h3 style={{ fontFamily: theme.typography.fontFamily }}>
            {" "}
            Proveedores cerca tuyo{/*props.proveedores*/}
          </h3>
        </Box>
      </div>
      <div className="cardContainer">
        {suppliers?.slice(0, 4).map((supplier) => (
          <SuppliersCard key={supplier.id} supplier={supplier} />
))};
      </div>
    </>
  );
}

export default SuppliersSection;
