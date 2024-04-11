import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import uploadImg from '../../../assets/svg/upload_img.svg';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useNavigate} from 'react-router-dom'
import './index.css';

const StyledField = styled(TextField)({
  marginTop: '20px',
  '& label.Mui-focused': {
    color: '#4E169D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#222222',
      borderWidth: 1, // grosor del borde normal
    },
    '&.Mui-focused fieldset': {
      borderWidth: 1, // grosor del borde en focus
    },
  },
});

// esquema de validación Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Este campo es requerido'),
  content: Yup.string().required('Este campo es requerido'),
});

export default function LoadPost() {
  const [letters, setLetters] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate()

  function onChange(event) {
    const { value } = event.currentTarget;
    setLetters(value);
  }

 const handleImageUpload = (event) => {
  const files = event.target.files;
  const newImages = [...images]; // copiar las imágenes existentes

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // validar tamaño y extensión del archivo
    if (
      file.size <= 3072000 &&
      validFileExtensions.image.includes(file.name.split('.').pop().toLowerCase()) &&
      newImages.length < 3
    ) {
      newImages.push(URL.createObjectURL(file)); // agregar la URL de la imagen
    }
  }

  setImages(newImages); 
};

  const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };
  
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
          <Form>
          <Box marginBottom="30px">
            <StyledField 
            name='title'
            label="Título *" 
            fullWidth={true} 
            helperText={<FormHelperText style={{ color: '#222222' }}> {touched.title && errors.title ? errors.title : 'Se visualizará en el título de la publicación'}</FormHelperText>}
            FormHelperTextProps={{ style: { padding: '0', margin: '0 0 5px 0' } }}/>
            <StyledField
              name='content'
              label="Ingresá el contenido de la publicación *"
              fullWidth={true}
              multiline={true}
              placeholder="Contenido de la publicación *"
              onChange={onChange}
              helperText={<FormHelperText style={{ color: '#222222', display:'flex', justifyContent: 'space-between'}}>
                <p>{touched.content && errors.content ? errors.content : "Máximo 2.000 caracteres"}</p>
                <p>{`${letters.length}/2000`}</p></FormHelperText>
                }
              inputProps={{ maxLength: 2000, style: { minHeight: '100px' } }}
              FormHelperTextProps={{ style: { margin :'0', padding:'5px 0 0 0 ' } }}
            />
          </Box>
            {/* mostrar las imágenes cargadas */}
                  {images.map((image, index) => (
                  <Box display="flex" justifyContent="center" key={index}>
                    <Box className='img_container' key={index}>
                       <img key={index} src={image} alt={`Image ${index}`} className="uploaded-image"/>
                       {/* botones de eliminar y editar imágenes */}
                       <button className="btn_edit_img">
                         <EditOutlinedIcon fontSize='small'/>
                       </button>
                       <button className="btn_remove_img" >
                         <DeleteOutlineOutlinedIcon fontSize='small' />
                       </button>
                    </Box>
                  </Box>
                ))}
          <Box display="flex" justifyContent="end" marginBottom="20px">
            {images.length >= 3 ? null :
            (
            <Box id='upload_img_section' display="flex" alignItems="center" flexDirection="column">
               <input 
                  type="file" 
                  name="images" 
                  id="upload_img" 
                  hidden 
                  multiple 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  disabled={images.length >= 3}
                />
                <label htmlFor="upload_img" className='btn_upload'>
                  <img src={uploadImg} alt=""/>
                  <Typography variant="body1">Subir Imagen</Typography>
                </label>
                <Box>
                   <p className='req_img' hidden={images.length >= 1}>*Requerida al menos una imagen</p>
                   <p className='req_img'>Hasta 3 imágenes</p>
                   <p className='req_img'>Máximo 3MB cada una</p>
                </Box>
            </Box>

            )
            }
          </Box>
          <Box display="flex" justifyContent="center">
            {/* botón submit */}
             <button type='submit' className='submit_btn' disabled={images.length === 0}>Cargar publicación</button>
          </Box>
        </Form>
        )}
      </Formik>
    </div>
  );
}
