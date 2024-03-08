import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from "@emotion/react";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Popper from '@mui/material/Popper';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandedCard from './ExpandedCard';

export default function SuppliersCard(/*props*/) {

  const theme = useTheme();
  const [expand, setExpand] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleOpen = () => {
    setExpand(true)
  }

  const handleClose = () => {
    setExpand((prevState) => !prevState)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Card className='card' aria-describedby={id} onClick={handleOpen} sx={{
      maxWidth: 250,
      width: '152px',
      height: '248px',
      position: "relative",
      margin: 1.5,
      borderRadius: 2,
      overflow: 'visible',
      zIndex: 1,
      boxShadow: 'none'
    }}>
      <CardContent sx={{ padding: '10px' }}>
        <Box sx={{
          color: '#4E169D',
          width: '60%',
          position: 'absolute',
          top: '-7px',
          left: '60px',
          border: 1,
          borderColor: '#00A364',
          borderRadius: 0.5,
          backgroundColor: 'white',
          boxShadow: 5,
          textAlign: 'center',
        }}>
          <h4 style={{ fontFamily: theme.typography.fontFamily }}>Categoria{/*props.categoria*/}</h4>
        </Box>
        <CardMedia sx={{ borderRadius: 1, width: '136px', height: '136px', }}
          component="img"
          // height="128"
          // width='304'
          image="src/modules/card/Rectangle 28.png"/*props.img*/
          alt="Producto"
        />
        <Container>
          <Box sx={{
            textAlign: 'left',
            marginTop: '10px'
          }}>
            <h4 style={{ fontFamily: theme.typography.fontFamily }}>Titulo{/*props.titulo*/}</h4>
          </Box>
          <Box sx={{
            textAlign: 'left'
          }}>
            <h5 style={{ fontFamily: theme.typography.fontFamily }}>Descripcion{/*props.descripcion*/}</h5>
          </Box>
          <div style={{
            display: 'flex',
            marginTop: '15px'
          }}>
            <LocationOnOutlinedIcon sx={{
              color: '#4E169D',
              fontSize: "22px"
            }} />
            <Box>
              <h4 style={{ fontFamily: theme.typography.fontFamily }}>Locacion{/*props.locacion*/}</h4>
            </Box>
          </div>
        </Container>
      </CardContent>


      {/* POPPER */}





      {/* POPPER */}


      {
        expand && (
          <ExpandedCard handleClose={handleClose} open={expand} />
        )
      }
    </Card>
  )
}