import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

const Custombutton = styled(Button)(() => ({
  backgroundColor: "#4E169D",
  "&:hover": {
    backgroundColor: "#4E169D",
  },
  borderRadius: "20px",
  width: "152px",
  height: "40px",
  textTransform: "none",
  padding: "22px",
  fontSize: "16px",
}));

export default function Invitacion() {
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ marginBottom: 3, marginTop: 2 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ 
          padding: 3,
          textAlign: 'center',
          }}>
          <h3 style={{ fontFamily: theme.typography.fontFamily, fontSize: '24px', fontWeight:400 }}>
            ¿Querés formar parte de la Red de impacto ECO como Proveedor?
          </h3>
        </Box>
        <Custombutton variant="contained"> Registrarte </Custombutton>
      </CardContent>
    </Container>
  );
}
