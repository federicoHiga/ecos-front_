import Invitacion from '../../modules/invitacion/Invitacion';
import Cards from '../../modules/card/Cards';
import './styles.css';
import { Box } from '@mui/material';

function Proveedores(/*props*/) {

  return (
    <>
      <Invitacion />
      <div>
        <Box className='recomendaciones' sx={{
          typography: 'h5',
          marginLeft: 3
        }}>Recomendaciones locales para vos{/*props.recomendaciones*/}</Box>
        <Box className='proveedores' sx={{
          typography: 'h4',
          fontWeight: 'bold',
          padding: 3
        }}>Proveedores cerca tuyo{/*props.proveedores*/}</Box>
      </div>
      <div className='cardContainer'>
        <Cards 
        // categoria={categoria} 
        // titulo={titulo}
        // descripcion={descripcion}
        // locacion={locacion}
        // img={img} 
        />
        <Cards />
        <Cards />
      </div>
    </>
  )
}

export default Proveedores;

