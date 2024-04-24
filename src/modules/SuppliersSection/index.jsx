/* eslint-disable react/prop-types */
import Invitacion from "../../modules/invitacion/Invitacion";
import SuppliersCard from "../../components/SuppliersCard";
import "./styles.css";
import { Typography } from "@mui/material";
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
      <div className="recommendations-section">
        <Typography className='recommendations-title' vairant='subtitulos' sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '25px', color: theme.palette.negro.main }}>
          Recomendaciones locales para vos
        </Typography>
        <Typography className="recommendations-subtitle" variant='subtitulos' sx={{ mt: '5px', fontWeight: 700, fontSize: "22px", lineHeight: "25px", color: theme.palette.negro.main }}>
          Proveedores cerca tuyo
        </Typography>
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
