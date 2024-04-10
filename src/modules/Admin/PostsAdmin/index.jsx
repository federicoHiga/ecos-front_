import React, {useState} from 'react'
import { Formik } from "formik"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import './index.css'
import { NavLink } from "react-router-dom";
import PostsCard from '../../../components/PostsCard'
import editSvg from '../../../assets/svg/edit_post_admin.svg'

const OptionsStyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: '#D2D2D2',
      borderTopLeftRadius : 'unset',
      borderTopRightRadius : 'unset',
      marginTop: theme.spacing(1),
      minWidth: 70,
      padding: '2px 10px 2px 12px',
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    },
  }))
  

export default function PostsAdmin(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const post = {
      title: '¿Qué es el Upcycling? ',
      fechaCreacion: '2024-04-09',
      description: 'El upcycling, también conocido como supra-reciclaje o reutilización creativa, es un enfoque innovador y sostenible para la gestión de residuos y la conservación de recursos. A diferencia del reciclaje convencional, que implica descomponer materiales para crear nuevos productos, el upcycling busca transformar objetos o materiales desechados en productos de mayor valor, sin degradar su calidad. Este proceso implica la reimaginación y reinvención de elementos que normalmente se considerarían basura, dándoles una segunda vida y reduciendo la cantidad de desechos enviados a vertederos. El upcycling fomenta la creatividad y la innovación, ya que requiere repensar cómo se pueden utilizar los materiales existentes de nuevas formas. El upcycling se ha convertido en una poderosa herramienta para abordar los desafíos medioambientales y sociales que enfrenta nuestro planeta. Algunos ejemplos de upcycling incluyen la creación de muebles a partir de palets de madera, la confección de ropa a partir de telas recicladas o la transformación de objetos cotidianos en piezas de arte. Esto no solo reduce la cantidad de residuos, sino que también fomenta la economía circular, donde los productos y materiales se reutilizan y reciclan continuamente en lugar de desecharse. El upcycling no solo beneficia al medio ambiente al reducir la cantidad de residuos, sino que también puede generar oportunidades económicas y sociales. Muchos emprendedores y artistas han encontrado en el upcycling una forma de crear productos únicos y sostenibles que atraen a consumidores conscientes de su impacto en el medio ambiente. En resumen, el upcycling es una práctica innovadora que transforma desechos en tesoros, promoviendo la sostenibilidad, la creatividad y la reducción de residuos. Al adoptar el upcycling en nuestras vidas y comunidades, podemos contribuir a un mundo más limpio y respetuoso con los recursos naturales. ¡Únete al movimiento del upcycling y ayúdanos a crear un futuro más sostenible!',
    };

    const hardImages = [
        "https://res.cloudinary.com/dxatwbzff/image/upload/v1710415070/Quinto/1c27a72869b176f8ac7bc5f75f460594_fddnpc.jpg",
        "https://res.cloudinary.com/dpbuvii9v/image/upload/v1712264504/c1498999f8addebf3e800720a2445865_uzmafz.jpg",
        "https://res.cloudinary.com/dpbuvii9v/image/upload/v1712264503/ca3817b7e452c7de4602ccf498f7afd1_xfkd2x.png",
    ];
    return(
        <div id="posts_admin">
            <h2>Publicaciones</h2>
            <button><NavLink to="loadPublication">Crear publicación</NavLink></button>
            <h3>Publicaciones cargadas</h3>
            <div className="posts_admin">
                <div>
                      <PostsCard 
                       post={post}
                       images={hardImages}/>
                       
                </div>
            </div>
            
        </div>
    )
}