import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import perfilImage from '../../assets/svg/perfil.svg'
import './profile.css'
import { AuthContext } from '../../utils/context/AuthContext'
import { useNavigate } from 'react-router-dom';

const StyledMenu = styled((props) => (
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
    borderTopLeftRadius : 'unset',
    borderTopRightRadius : 'unset',
    marginTop: theme.spacing(1),
    minWidth: 200,
    padding: '7px 23px 0 23px',
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
}));


export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState(null); // Estado local para almacenar los datos del usuario
  const navigate = useNavigate()


  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const googleSignOut = async () => {
    try {
      if (isLoggedIn) {
        sessionStorage.removeItem('userData')
        sessionStorage.removeItem('rol')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false); 
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
      console.log('Error al cerrar sesión.');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const userDataString = sessionStorage.getItem('userData');
      if (userDataString) {
        const userDataObject = JSON.parse(userDataString);
        setUserData(userDataObject);
      }
    }
    console.log(`isLoggedIn es: ${isLoggedIn}`)
  }, [isLoggedIn]);
  


  const getInitials = (fullName) => {
    if (!fullName) return '';
    const nameParts = fullName.split(' ');
    return nameParts.map((part) => part.charAt(0)).join('').toUpperCase();
  };

  const initialName = getInitials(userData?.name)
  const initialLastname = getInitials(userData?.lastName)

  return (
    <div id="profile-menu">
    { isLoggedIn ?
     <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 42, height: 42, bgcolor: grey[900] }}>{initialName + initialLastname}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      {userData && userData.rol === "PROVEEDOR" ? 
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div onClick={handleClose}>
          <div id="profile">
          <img src={perfilImage}/>
          <div id="info">
          {userData && userData.lastName && userData.name && 
            (<p id="name">{`${userData.name}  ${userData.lastName}`}</p>)}
            {userData && userData.email && 
            (<p>{userData.email}</p>)}
          </div>
          </div>
        </div>
        <div onClick={handleClose} id="item-mi-perfil">
          <a href="/miPerfil">Mi perfil</a>
        </div>
        <div onClick={handleClose}>
          <span onClick={googleSignOut}>
            Cerrar sesión
          </span>
        </div>
      </StyledMenu> 
      : 
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div onClick={handleClose}>
          <span onClick={googleSignOut} id='logout'>
            Cerrar sesión
          </span>
        </div>
      </StyledMenu>
    }

    </React.Fragment>  
      :
    <React.Fragment>  
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          <a href="/login" id='perfil-inactivo'>
            <img src={perfilImage} alt="" id='img-perfil-inactivo'/>
            Ingresá
          </a>
          </IconButton>
        </Tooltip>
      </Box>
    </React.Fragment>
}
    </div>
  );
}
