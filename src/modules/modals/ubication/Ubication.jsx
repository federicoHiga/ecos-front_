import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import axios from 'axios';

const UbicationModal = ({ isOpen, onClose}) => {
  const [modalStatus, setModalStatus] = useState(false)

  const getAdress = async (latitude, longitude, accept) => {
    try {
      const response = await axios.get(`http://localhost:8080/location/${latitude}/${longitude}/${accept}`);
      console.log(response)
      console.log(response.data)
      return response.data; 
    } catch (error) {
      throw error
    }
  }

  const handleSaveLocation = async () => {
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        const latitudeAsString = latitude.toString(); 
        const longitudeAsString = longitude.toString(); 
        setModalStatus(true);
        const providersPosts = await getAdress(latitudeAsString, longitudeAsString, modalStatus);
        localStorage.setItem('providersPostUb', JSON.stringify(providersPosts));
        window.location.href = '/'
        onClose()
      } catch (error) {
        if (error.code === error.PERMISSION_DENIED) {
          console.error('El usuario ha denegado el permiso de geolocalización.');
        } else {
          console.error('Error al obtener las coordenadas:', error.message);
        }
      }
    } else {
      console.error('El navegador no soporta geolocalización');
    }
  };

  const handleCancel = () => {
    setModalStatus(false)
    console.log('El usuario decidió no solicitar la ubicación');
    onClose(); 
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Activá tu ubicación</DialogTitle>
      <DialogActions>
        <Button onClick={handleSaveLocation} sx={{color:'#4E169D', marginRight:'15px'}}>Aceptar</Button>
        <Button onClick={handleCancel} sx={{marginRight:'4px'}}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UbicationModal;
