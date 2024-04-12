import React from "react";
import "./styles.css";
import { useFormik } from "formik";
import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import useUser from "../../../utils/services/hooks/useUser";
import { schemaFormProviders } from "../../../utils/schemas/schemaFormProviders";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  console.log(values);
};

const ProvidersForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      //id o name?
      name: "",
      shortDescription: "",
      category: "",
      email: "",
      phoneNumber: "",
      instagram: "",
      facebook: "",
      country: "",
      province: "",
      city: "",
      longDescription: "",
    },
    validationSchema: schemaFormProviders,
    onSubmit,
  });

  console.log("errors", errors);

  return (
    <div className="providers-form-screen">
      <section className="providers-form-title">
        <Typography variant="titulos" sx={{ minWidth: "328px" }}>
          Carga de Producto/Servicio
        </Typography>
        <Typography variant="subtitulos" sx={{ mt: 4 }}>
          Completá el formulario para subir tu Producto/Servicio
        </Typography>
      </section>

      <section className="providers-form-main-container">
        <form
          className="providers-form-inputBox"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            className={
              errors.name && touched.name
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            name="name"
            label="Nombre de la Organización"
            helperText={
              errors.name && touched.name
                ? errors.name
                : "Se visualizará en el título de la publicación"
            }
          />
          <TextField
            className={
              errors.shortDescription && touched.shortDescription
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.shortDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.shortDescription && touched.shortDescription}
            name="shortDescription"
            label="Breve descripción del Producto/Servicio"
            helperText={
              errors.shortDescription && touched.shortDescription
                ? errors.shortDescription
                : "Se visualizará en el subtítulo de la publicación 0/50"
            }
          />
          <TextField
            name="category"
            className="custom-textfield"
            label="Categoría"
            select
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={
              errors.category && touched.category
                ? errors.category
                : "Seleccioná la categoría de tu Producto/Servicio"
            }
          >
            {/* <MenuItem value={10}>Diez</MenuItem>
            <MenuItem value={20}>Veinte</MenuItem>
            <MenuItem value={30}>Treinta</MenuItem> */}
          </TextField>
          <TextField
            className={
              errors.email && touched.email
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            name="email"
            label="Correo electrónico"
            helperText={
              errors.email && touched.email
                ? errors.email
                : "El mismo con el que te registraste o uno diferente"
            }
          />
          <TextField
            className={
              errors.phoneNumber && touched.phoneNumber
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phoneNumber && touched.phoneNumber}
            name="phoneNumber"
            label="Teléfono o Whatsapp"
            helperText={
              errors.phoneNumber && touched.phoneNumber
                ? errors.phoneNumber
                : "Con el siguiente formato +54 9 261 002 002"
            }
          />
          <TextField
            className={
              errors.instagram && touched.instagram
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.instagram}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.instagram && touched.instagram}
            name="instagram"
            label="Instagram"
            helperText={
              errors.instagram && touched.instagram
                ? errors.instagram
                : "Podés pegar el link de tu perfil"
            }
          />
          <TextField
            className={
              errors.facebook && touched.facebook
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.facebook}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.facebook && touched.facebook}
            name="facebook"
            label="Facebook"
            helperText={
              errors.facebook && touched.facebook
                ? errors.facebook
                : "Podés pegar el link de tu perfil"
            }
          />
          <TextField
            name="country"
            className="custom-textfield"
            label="País"
            select
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={
              errors.country && touched.country
                ? errors.country
                : "Seleccioná un país de la lista"
            }
          >
            {/* <MenuItem value={10}>Diez</MenuItem>
            <MenuItem value={20}>Veinte</MenuItem>
            <MenuItem value={30}>Treinta</MenuItem> */}
          </TextField>
          <TextField
            name="province"
            className="custom-textfield"
            label="Provincia/Estado"
            select
            value={values.province}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={
              errors.province && touched.province
                ? errors.province
                : "Seleccioná una provincia/estado de la lista"
            }
          >
            {/* <MenuItem value={10}>Diez</MenuItem>
            <MenuItem value={20}>Veinte</MenuItem>
            <MenuItem value={30}>Treinta</MenuItem> */}
          </TextField>
          <TextField
            className={
              errors.city && touched.city
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.city && touched.city}
            name="city"
            label="Ciudad"
            helperText={
              errors.city && touched.city
                ? errors.city
                : "Sin abreviaturas, nombre completo"
            }
          />
          <TextField
            className={
              errors.longDescription && touched.longDescription
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.longDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.longDescription && touched.longDescription}
            name="longDescription"
            label="Descripción del Producto/Servicio"
            helperText={
              errors.longDescription && touched.longDescription
                ? errors.longDescription
                : "Máximo 300 caracteres                                     0/300"
            }
            multiline
            rows={5}
          />
          <TextField
            sx={{ marginTop: 12 }}
            variant="outlined"
            type="file"
            label=""
            onChange={handleChange}
            accept="image/*"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
          <Button
            sx={{ marginTop: 5, marginBottom: 5 }}
            className={
              Object.keys(errors).length == 0 &&
              Object.entries(values).some(([key, value]) => value)
                ? "ok-button"
                : ""
            }
            variant="form"
            type="submit"
            disabled={isSubmitting}
            // onClick={ Button.className === "ok-button" &&
            //    alert('This is an alert message!')}
          >
            Cargar Producto/Servicio
          </Button>
        </form>
      </section>
    </div>
  );
};

export default ProvidersForm;
