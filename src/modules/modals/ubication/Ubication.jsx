import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

const UbicationModal = ({ isOpen, onClose }) => {
  const [coordinates, setCoordinates] = useState(null);

  const handleSaveLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude }); 
          localStorage.setItem('userCoordinates', JSON.stringify({ latitude, longitude })); 
          console.log('Coordenadas guardadas:', { latitude, longitude });
          onClose(); 
        },
        (error) => {
          console.error('Error al obtener las coordenadas:', error.message);
        }
      );
    } else {
      console.error('El navegador no soporta geolocalización');
    }
  };

  const handleCancel = () => {
    console.log('El usuario decidió no solicitar la ubicación');
    onClose(); 
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Activá tu ubicación</DialogTitle>
      <DialogActions>
        <Button onClick={handleSaveLocation}>Aceptar</Button>
        <Button onClick={handleCancel}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UbicationModal;
