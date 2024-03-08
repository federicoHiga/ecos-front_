import Invitacion from '../../modules/invitacion/Invitacion';
import SuppliersCard from '../../components/SuppliersCard';
import './styles.css';
import { Box } from '@mui/material';
import { useTheme } from "@emotion/react";

function SuppliersSection(/*props*/) {

  const theme = useTheme();

  return (
    <>
      <Invitacion />
      <div>
        <Box className='recomendaciones' sx={{
          marginLeft: 2,
          fontSize:'16px'
        }}>
         <h3 style={{ 
          fontFamily: theme.typography.fontFamily,}}>Recomendaciones locales para vos{/*props.recomendaciones*/}</h3> 
          </Box>
        <Box className='proveedores' sx={{
          fontWeight: 'bold',
          margin: 2,
          fontSize:'22px'
        }}>
         <h3 style={{ fontFamily: theme.typography.fontFamily }}> Proveedores cerca tuyo{/*props.proveedores*/}</h3> 
          </Box>
      </div>
      <div className='cardContainer'>
        <SuppliersCard 
        // categoria={categoria} 
        // titulo={titulo}
        // descripcion={descripcion}
        // locacion={locacion}
        // img={img} 
        />
        <SuppliersCard />
        <SuppliersCard />
      </div>
    </>
  )
}

export default SuppliersSection;

