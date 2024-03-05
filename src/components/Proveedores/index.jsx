import Invitacion from '../../modules/invitacion/Invitacion';
import Cards from '../../modules/card/Cards';
import './styles.css';
import { Box } from '@mui/material';

function Proveedores() {

  return (
    <>
      <Invitacion />
      <div>
        <Box sx={{
          typography: 'h5',
          textAlign: 'left',
          marginLeft: 3
        }}>Recomendaciones locales para vos</Box>
        <Box sx={{
          typography: 'h4',
          fontWeight: 'bold',
          textAlign: 'left',
          padding: 3
        }}>Proveedores cerca tuyo</Box>
      </div>
      <div className='cardContainer' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  )
}

export default Proveedores;

