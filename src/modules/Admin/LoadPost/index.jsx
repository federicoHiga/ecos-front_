import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import uploadImg from '../../../assets/svg/upload_img.svg';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './index.css';

const StyledField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#4E169D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#222222',
      borderWidth: 1, // Grosor del borde normal
    },
    '&.Mui-focused fieldset': {
      borderWidth: 1, // Grosor del borde en enfoque
    },
  },
});

// Esquema de validación Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Este campo es requerido'),
  content: Yup.string().required('Este campo es requerido'),
  images: Yup.array()
    .required('*Requerida al menos una imagen')
    .min(1, '*Requerida al menos una imagen')
    .max(3, 'Máximo 3 imágenes permitidas'),
});

export default function LoadPost() {
  const [letters, setLetters] = useState('');
  const [images, setImages] = useState([]);

  function onChange(event) {
    const { value } = event.currentTarget;
    setLetters(value);
  }

 const handleImageUpload = (event) => {
  const files = event.target.files;
  const newImages = [...images]; // Copiar las imágenes existentes

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // Validar tamaño y extensión del archivo
    if (
      file.size <= 3072000 &&
      validFileExtensions.image.includes(file.name.split('.').pop().toLowerCase()) &&
      newImages.length < 3
    ) {
      newImages.push(URL.createObjectURL(file)); // Agregar la URL de la imagen
    }
  }

  setImages(newImages); // Actualizar el estado de las imágenes
};


  const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };


  return (
    <div id="load_post">
      <h2>Carga de publicación</h2>
      <h3>Completá los datos para crear una nueva publicación</h3>
      <Formik
        initialValues={{
          title: '',
          content: '',
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          //acciones para realizar con los valores del form (post)
          console.log(values);
          setSubmitting(false);
        }}
     >
      {({ errors, touched, values }) => (
          <form action="" method="post">
          <div>
            <StyledField 
            name='title'
            required 
            label="Título" 
            fullWidth={true} />
          </div>
          <div>
            <StyledField
              name='content'
              required
              label="Ingresá el contenido de la publicación"
              fullWidth={true}
              multiline={true}
              placeholder="Contenido de la publicación *"
              onChange={onChange}
              helperText={<FormHelperText style={{ color: '#222222' }}>{`${letters.length}/2000`}</FormHelperText>}
              inputProps={{ maxLength: 2000, style: { minHeight: '100px' } }}
              FormHelperTextProps={{ style: { position: 'absolute', bottom: '-50px', right: 0 } }}
            />
            <div id='upload_img_section'>
              <input 
              type="file" 
              name="images" 
              id="upload_img" 
              hidden 
              multiple 
              onChange={handleImageUpload} accept="image/*" 
              disabled={images.length >= 3}/>
              <label htmlFor="upload_img" className='btn_upload'>
                <img src={uploadImg} alt="" />
                <p>Subir Imagen</p>
              </label>
              <div>
                <p className='req_img'>*Requerida al menos una imagen</p>
                <p className='req_img'>Hasta 3 imágenes</p>
                <p className='req_img'>Máximo 3MB cada una</p>
              </div>
            </div>
          </div>
          {/* Mostrar las imágenes cargadas */}
          {images.map((image, index) => (
                  <div className='img_container' key={index}>
                    <img key={index} src={image} alt={`Image ${index}`} className="uploaded-image"/>
                    <button className="btn_edit_img">
                      <EditOutlinedIcon fontSize='small'/>
                    </button>
                    <button className="btn_remove_img" onClick={() => removeImage(index)}>
                      <DeleteOutlineOutlinedIcon fontSize='small' />
                    </button>
                  </div>
                ))}
          <button type="submit" className='submit_btn' disabled={images.length === 0}>Cargar publicación</button>
        </form>
        )}
      </Formik>
    </div>
  );
}
