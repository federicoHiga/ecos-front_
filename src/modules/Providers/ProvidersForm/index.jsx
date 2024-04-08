import React, { useState } from "react";
import "./styles.css";
import { useFormik } from "formik";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useUser from "../../../utils/services/hooks/useUser";

const ProvidersForm = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
    initialErrors:{},
  });

  const [inputValue, setInputValue] = useState('');

  const handleError = (e) => {
    setInputValue(e.target.value);
  };

  const inputValidate = () =>{
    return inputValue === '';
  }

  return (
    <div className="providers-form-screen">
      <section className="providers-form-title">
        <Typography variant="titulos" sx={{ minWidth: "328px" }}>
          Carga de Producto/Servicio
        </Typography>
        <Typography variant="subtitulos" sx={{ mt: 4}}>
          Completá el formulario para subir tu Producto/Servicio
        </Typography>
      </section>

      <section className="providers-form-main-container">
        <Box className="providers-form-inputBox"
            component="form"
            // sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField className="inputField"
                onChange={handleChange}
                onBlur={handleError}
                error={inputValidate()}
                required
                value={inputValue}
                id="organization-name"
                label="Nombre de la Organización"
                helperText="Se visualizará en el título de la publicación"
            />
            <TextField className="inputField"
                onChange={handleChange}
                required
                id="organization-name"
                label="Breve descripción del Producto/Servicio"
                helperText="Se visualizará en el subtítulo de la publicación 0/50"
            />
        </Box>
      </section>
    </div>
  );
};

export default ProvidersForm;
