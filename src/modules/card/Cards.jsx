import React from 'react';
import { Box, Container } from '@mui/material';
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

export default function Cards(/*props*/) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Card aria-describedby={id} onClick={handleClick} sx={{
      maxWidth: 250,
      position: "relative",
      margin: 1.5,
      borderRadius: 4,
      overflow: 'visible',
      zIndex:1
    }}>
      <CardContent sx={{ padding: '13px' }}>
        <Box sx={{
          typography: 'h5',
          color: '#4E169D',
          width: '60%',
          position: 'absolute',
          top: '-10px',
          left: '87px',
          border: 2,
          borderColor: '#00A364',
          borderRadius: 1,
          backgroundColor: 'white',
          boxShadow: 10,
          textAlign: 'center'
        }}>Categoria{/*props.categoria*/}</Box>
        <CardMedia sx={{ borderRadius: 1, width: '201px', height: '200px', }}
          component="img"
          height="128"
          width='304'
          image="src/modules/card/Rectangle 28.png"/*props.img*/
          alt="Producto"
        />
        <Container>
          <Box sx={{ typography: 'h5', textAlign: 'left', marginTop: '10px' }}>Titulo{/*props.titulo*/}</Box>
          <Box sx={{ typography: 'h6', textAlign: 'left' }}>Descripcion{/*props.descripcion*/}</Box>
          <div style={{ display: 'flex', marginTop: '15px' }}>
            <LocationOnOutlinedIcon sx={{ color: '#4E169D', fontSize: "32px" }} />
            <Box sx={{ typography: 'h5' }}>Locacion{/*props.locacion*/}</Box>
          </div>
        </Container>
      </CardContent>


      {/* POPPER */}


      <Popper sx={{zIndex: 2}}
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement='top-start'
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [
                -(window.innerWidth / 2 - ('auto')), // Horizontal
                -(window.innerHeight / 2 - ('0')), // Vertical 
              ],
            },
          },
        ]}
      >
        <Card aria-describedby={id} onClick={handleClick} elevation={3} sx={{
          width: '428px',
          margin: 1.5,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#EAEAEA',
          
        }}>
          <div>
            <CloseIcon sx={{ float: 'right', padding: 1 }} />
          </div>
          <CardContent sx={{ padding: '13px' }}>
            <Box sx={{
              typography: 'h5',
              color: '#4E169D',
              width: '40%',
              float: 'right',
              border: 2,
              borderColor: '#00A364',
              borderRadius: 1,
              backgroundColor: 'white',
              boxShadow: 10,
              textAlign: 'center'
            }}>Categoria{/*props.categoria*/}</Box>
            <CardMedia sx={{ borderTopLeftRadius: 1, }}
              component="img"
              image="src/modules/card/Rectangle 28.png"
              alt="Producto"
            />
            <Container>
              <Box sx={{ typography: 'h5', textAlign: 'left', marginTop: '10px' }}>Titulo{/*props.titulo*/}</Box>
              <Box sx={{ typography: 'h6', textAlign: 'left', color: '#4E169D' }}>Descripcion{/*props.desc*/}</Box>
              <div style={{ display: 'flex', marginTop: '15px' }}>
                <LocationOnOutlinedIcon sx={{ color: '#4E169D', fontSize: "32px" }} />
                <Box sx={{ typography: 'h5' }}>Locacion{/*props.locacion*/}</Box>
              </div>
              <Box sx={{ typography: 'h5', textAlign: 'left', marginTop: '20px', marginBottom: '20px' }}>Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.{/*props.body*/}</Box>

              {/* footerCard */}
              <Box sx={{ typography: 'h5' }}>Contactanos</Box>
              <div style={{display:'flex', justifyContent: 'space-between', marginTop:20}}>
                <div style={{textAlign:'center',}}>
                  <WhatsAppIcon sx={{ color: '#4E169D', fontSize: "32px" }}/>
                  <h4>WhatsApp</h4>
                </div>
                <div style={{textAlign:'center',}}>
                  <InstagramIcon sx={{ color: '#4E169D', fontSize: "32px" }}/>
                  <h4>Instagram</h4>
                </div>
                <div style={{textAlign:'center',}}>
                  <FacebookIcon sx={{ color: '#4E169D', fontSize: "32px" }}/>
                  <h4>Facebook</h4>
                </div>
                <div style={{textAlign:'center',}}>
                  <EmailOutlinedIcon sx={{ color: '#4E169D', fontSize: "32px" }}/>
                  <h4>Mail</h4>
                </div>
              </div>
              {/* footerCard */}

            </Container>
          </CardContent>
        </Card>
      </Popper>


      {/* POPPER */}


    </Card>
  )
}