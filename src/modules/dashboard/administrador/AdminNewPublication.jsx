import "./adminNewPublication.css";
import { useEffect, useState } from "react";
import IndexFile from "../../../components/cloudinary/IndexFile";
import ImagesPublicationList from "../../../components/admin/imagesPublication/imagesPublication";
import usePost from "../../../utils/services/hooks/usePost";
import AlertSuccesErrorModal from "../../../components/modals/alertErrorSucces/alertErrorSuccesModal";
import useUser from "../../../utils/services/hooks/useUser";
import { useParams } from "react-router-dom";
import useGetAll from "../../../utils/services/hooks/useGetAll";
import useGetToken from "../../../utils/services/hooks/useGetToken";
import useGetPulblication from "../../../utils/services/hooks/getPublication";
import { useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { schemaFormPublication } from "../../../utils/schemas/schemaFormPublication";

export default function NewPublication() {
  const { values, errors, touched, handleBlur, handleChange} = useFormik ({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: schemaFormPublication,
  })
  const [publication, setPublication] = useState({
    title: "",
    description: "",
  });
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [parrafoModal, setParrafoModal] = useState("");
  const [typeModal, setTypeModal] = useState("");
  // const handlerChangeText = (event) => {
  //   setPublication({ ...publication, [event.target.name]: event.target.value });
  // };
  const { token } = useUser();
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await useGetPulblication({
          url: `publication/getById/${id}/1`,
          token,
        });
        console.log('data:',data);
        // setPublication({
        //   id: data?.data?.id,
        //   title: data?.data?.title,
        //   description: data?.data?.description,
        // });
        values.title
        values.description
        const imagesData = []
        data?.data?.imagePublicDtoList?.forEach((img) => {
          imagesData.push( { ...img, isBase64: false });
        });
        setImages(imagesData)
      } catch (error) {}
    };
    fetchData();
  }, [id]);

  const handlerLoadImage = (text, name) => {
    if (images.length >= 3) {
      return;
    }
    if (images.some((img) => img.name === name)) {
      return;
    }
    setImages([
      ...images,
      {
        isBase64: true,
        path: text,
        name: name,
      },
    ]);
  };

  const handleDeleteImage = (index) => {
    const newArray = [...images];
    newArray.splice(index, 1);
    setImages(newArray);
  };
  const handlerCloseModal = () => {
    setModal(false);
    setParrafoModal("");
    setTypeModal("");
  };

  const handlerSubmit = async () => {
    if (images.length === 0) {
      setParrafoModal("La publicación debe tener al menos 1 imagen");
      setTypeModal("error");
      setModal(true);
      return;
    }
    try {
      if (location.pathname.startsWith("/admin/newPublication")) {
        await usePost({
          url: "publication/create/1",
          body: { values: values, images: images },
          token,
        });
      } else {
        await usePost({
          url: `publication/edit/${publication.id}/1`,
          body: { values: values, images: images },
          token,
        });
      }
      setParrafoModal("Publicación creada con éxito");
      setTypeModal("succes");
      setModal(true);
      // setPublication({ title: "", description: "" });
      setImages([]);
    } catch (error) {
      console.log(error);
      setParrafoModal("Lo sentimos, la publicación no pudo ser creada.");
      setTypeModal("error");

      setModal(true);
    }
  };

  const handleEditImage = (text, name, newName) => {
    console.log(name, newName);
    const newArrImages = images.map((img) => {
      if (img && img.name === name) {
        img.isBase64 = true;
        img.path = text;
        img.name = newName;
      }
      return img;
    });

    setImages(newArrImages);
    return;
  };
  console.log(images);
  return (
    <div className="container">
      <Typography variant="titulos">Carga de publicación</Typography>
      <Typography variant="subtitulos">
        Completá los datos para crear una nueva publicación
      </Typography>
      <form action="" className="form">

        {/* <div className="containerTextInput">
          <div className="">
            <input
              type="text"
              className="inputText"
              name="title"
              placeholder="Titulo*"
              value={publication?.title}
              onChange={handlerChangeText}
            />
          </div>
          <label htmlFor="title" className="labelText">
            Se visualizará en el título de la publicación
          </label>
        </div> */}

        <TextField
            id="title"
            className={
              errors.title && touched.title
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.title}
            onChange={ handleChange}
            onBlur={handleBlur}
            error={errors.title && touched.title}
            name="title"
            label="Título"
            helperText={
              errors.title && touched.title
                ? errors.title
                : "Se visualizará en el título de la publicación"
            }
          />
        {/* <div className="containerTextarea">
          <div className="divTextarea">
            <textarea
              type="description"
              className="textarea"
              placeholder="Ingresá el contenido de la publicación*"
              name="description"
              value={publication?.description}
              onChange={handlerChangeText}
            />
          </div>
          <div className="textareaLabel">
            <label htmlFor="description" className="labelText">
              Máximo 2.000 caracteres{" "}
            </label>
            <label htmlFor="description" className="labelText">
              {publication.description.length} /2000
            </label>
          </div>
        </div> */}
        <TextField
            id="description"
            sx={{marginBottom: 22}}
            className={
              errors.description && touched.description
                ? "custom-textfield input-error"
                : "custom-textfield"
            }
            required
            value={values.description}
            onChange={ handleChange}
            onBlur={handleBlur}
            // error={errors.description && touched.description}
            name="description"
            label="Ingresá el contenido de la publicación"
            helperText={
              errors.description && touched.description
                ? errors.description
                : "Máximo 2.000 caracteres"
            }
            multiline
            rows={10}
          />
        {images.length >= 3 ? null : (
            <div className="containerIndexFile">
              <IndexFile functionLoad={handlerLoadImage} type={"input"} />
            </div>
          )}
      </form>
      <div className="imageContainer">
        <ImagesPublicationList 
          listImages={images}
          handlerDeleteImage={handleDeleteImage}
          handleEditImage={handleEditImage}
        />
      </div>
      <button onClick={handlerSubmit}>Crear publicaón</button>
      <AlertSuccesErrorModal
        boolOpen={modal}
        parrafo={parrafoModal}
        closeFuncion={handlerCloseModal}
        type={typeModal}
      />
    </div>
  );
}
