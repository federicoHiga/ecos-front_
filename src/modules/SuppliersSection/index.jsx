/* eslint-disable react/prop-types */
import Invitacion from "../../modules/invitacion/Invitacion";
import SuppliersCard from "../../components/SuppliersCard";
import "./styles.css";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import UbicationModal from "../modals/ubication/Ubication";

function SuppliersSection({ suppliers }) {
  const [openModal, setOpenModal] = useState(false);
  const [suppliersUbication, setSuppliersUbication] = useState([])

  const theme = useTheme();
  useEffect(() => {
    const providersPostsFromLocalStorage = JSON.parse(localStorage.getItem('providersPostUb'));
    setSuppliersUbication(providersPostsFromLocalStorage)
    if (!providersPostsFromLocalStorage) {
      setOpenModal(true); 
    } 
  }, []); 

  const handleCloseModal = () => {
    setOpenModal(false); 
  };

  return (
    <>
      <UbicationModal isOpen={openModal} onClose={handleCloseModal}/>
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
      {suppliersUbication ? (
         suppliersUbication.slice(0, 4).map((supplierUb) => (
           <SuppliersCard key={supplierUb.id} supplier={supplierUb} />
         ))
       ) : (
         suppliers?.slice(0, 4).map((supplier) => (
           <SuppliersCard key={supplier.id} supplier={supplier} />
         ))
       )}

      </div>
    </>
  );
}

export default SuppliersSection;
