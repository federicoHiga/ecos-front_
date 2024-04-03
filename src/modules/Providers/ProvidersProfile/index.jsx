import React, { useState } from "react";
import "./styles.css";
import { Button, Typography } from "@mui/material";
import ProductsCard from "../../../components/ProductsCard";
import { SuppliersData } from "../../../utils/data/suppliersMock";
import { SearchResultCard } from "../../../components/SearchResultsCards";
import useUser from "../../../utils/services/hooks/useUser";

const ProvidersProfile = () => {
  const [prodStatus] = useState("postulado");
  const prod = SuppliersData[0];
  const { user } = useUser();

  return (
    <div className="providers-profile-screen">
      <section className="providers-profile-name-container">
        <Typography variant="titulos" sx={{ minWidth: "328px" }}>
          {`${user?.name} ${user?.lastName}`}
        </Typography>
      </section>

      <section className="providers-profile-main-container">
        <Button variant="purple">Cargar Producto/Servicio</Button>
        <Typography variant="subtitulos" sx={{ mt: 7 }}>
          Mis Productos/Servicios
        </Typography>
        <div className="providers-profile-products-container">
          <ProductsCard status={prodStatus} />
        </div>
      </section>
      {prodStatus !== "denegado" && (
        <section className="providers-profile-product-demo">
          <Typography
            variant="subtitulos"
            sx={{
              fontWeight: 400,
              fontSize: "20px",
              textAlign: "center",
              margin: "0 16px 16px",
            }}
          >
            Asi se vería tu Producto/Servicio en el Directorio
          </Typography>

          <SearchResultCard supplier={prod} />
        </section>
      )}
    </div>
  );
};

export default ProvidersProfile;
