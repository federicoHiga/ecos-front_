import React, {useState, useEffect} from "react";
import "../../assets/styles/Inicio/inicio.css";
import PostsSection from "../PostsSection/index";
import ImpactEnterprises from "../../components/ImpactEnterprises";
import CategoriesGrid from "../../components/CategoriesGrid";
import SuppliersSection from "../SuppliersSection";
import SearchByChildren from "../../components/SearchFlexible";
import useGetAll from "../../utils/services/hooks/useGetAll";
import UbicationModal from "../modals/ubication/Ubication";

export default function Inicio() {
  const [openModal, setOpenModal] = useState(false);
  const { data } = useGetAll({
    url: "supplier",
    needsAuth: false,
  });

  useEffect(() => {
    const userCoordinates = JSON.parse(localStorage.getItem('userCoordinates'));
    if (!userCoordinates) {
      setOpenModal(true); 
    } 
  }, []); 
  const handleCloseModal = () => {
    setOpenModal(false); 
  };

  return (
    <div>
      <SearchByChildren>
        <UbicationModal isOpen={openModal} onClose={handleCloseModal}/>
        <ImpactEnterprises />
        <SuppliersSection suppliers={data?.data} />
        <CategoriesGrid />
        <PostsSection />
      </SearchByChildren>
    </div>
  );
}
