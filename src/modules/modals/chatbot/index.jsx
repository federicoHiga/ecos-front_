import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button, DialogContent, DialogContentText } from '@mui/material';

const ChatbotModal = ({ handleClose }) => {

  const handleYesClick = () => {
    handleClose(true)
  };

  const handleNoClick = () => {
    handleClose(false)
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle sx={{textAlign:'center', fontSize: '24px'}}>¿Seguro que desea salir?</DialogTitle>
      <DialogContent>
        <DialogContentText>Una vez que cierre el Chatbot se perderá toda la conversación</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleYesClick} sx={{color:'#4E169D', marginRight:'15px'}}>Sí</Button>
        <Button onClick={handleNoClick} sx={{marginRight:'4px'}}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChatbotModal;
