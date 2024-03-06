import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const Custombutton = styled(Button)(() => ({
    backgroundColor: "#4E169D",
    '&:hover': {
        backgroundColor: "#4E169D"
    },
    borderRadius: '20px',
    width: '152px',
    height: '40px',
    textTransform: 'none',
    padding: '22px',
    fontSize: '16px',
}));

export default function Invitacion() {

    return (
        <Container maxWidth="sm" sx={{marginBottom: 3, marginTop: 2}}>
            <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{
                    typography: 'h4',
                    padding: 4
                }}>¿Querés formar parte de la
                    Red de impacto ECO como Proveedor?</Box>
                <Custombutton variant="contained"> Registrarte </Custombutton>
            </CardContent>
        </Container>
    )
}