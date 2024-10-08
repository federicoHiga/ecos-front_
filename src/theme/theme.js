import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#171616",
    },
    secondary: {
      main: "#171616",
    },
    verdes: {
      main: "#00A364",
      dark: "#366C00",
      medium: "#70D20F",
      light: "#99FF33",
    },
    naranjas: {
      dark: "#DD7200",
      medium: "#F8952C",
      light: "#FDAD58",
    },
    violeta: {
      main: "#4E169D",
      dark: "#510480",
      medium: "#a628bf",
      light: "#e4c0ec",
    },
    exito: {
      main: "#1d9129",
    },
    revision: {
      main: "#b86b11",
    },
    rojo: {
      main: "#bc1111",
    },
    blanco: {
      main: "#FAFAFA",
    },
    grises: {
      dark: "#505050",
      medium: "#d2d2d2",
      light: "#EAEAEA",
    },
    negro: {
      main: "#222",
    },
  },
  typography: {
    fontFamily: '"Nunito", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    titulos: {
      fontSize: "1.75rem",
      fontWeight: 700,
      // ... otros estilos que quieras agregar
    },
    subtitulos: {
      fontSize: "1.25rem",
      fontWeight: 500,
      // ... otros estilos que quieras agregar
    },
    parrafos: {
      fontSize: "0.75rem",
      fontWeight: 300,
      // ... otros estilos que quieras agregar
    },
    parrafosColor: {
      fontSize: "0.75rem",
      fontWeight: 300,
      backgroundColor: "#C2C2C2",
      // ... otros estilos que quieras agregar
    },
  },
  shape: {
    borderRadius: 4, // Valor por defecto
    borderRadiusSmall: 2,
    borderRadiusMedium: 8,
    borderRadiusLarge: 16,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "purple" },
          style: {
            textTransform: "none",
            border: "none",
            maxWidth: "200px",
            maxHeight: "40px",
            borderRadius: "100px",
            padding: "10px 24px",
            fontSize: "16px",
            color: "white",
            fontWeight: 700,
            lineHeight: "20px",
            backgroundColor: "#4E169D",
            "&:hover": {
              backgroundColor: "#4E169D",
            },
          },
        },
        {
          props: { variant: "categories" },
          style: {
            minWidth: "152px",
            maxWidth: "328px",
            minHeight: "64px",
            maxHeight: "72px",
            border: "none",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 5px",
            textTransform: "none",
            backgroundColor: "#EAEAEA",
            "&:hover": {
              backgroundColor: "#EAEAEA",
            },
          },
        },
      ],
    },
  },
});

export default theme;
