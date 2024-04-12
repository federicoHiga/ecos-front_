import * as yup from "yup";

export const schemaFormPublication = yup.object().shape({
    title: yup
      .string()
      .required("Este campo es obligatorio"),
    description: yup
      .string()
      .required("Este campo es obligatorio")
      .min(5, "El texto debe tener al menos 5 caracteres")
      .max(2000, "El texto no debe exceder los 2000 caracteres"),
  });
  