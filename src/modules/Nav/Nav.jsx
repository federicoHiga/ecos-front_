import React, {useState, useContext} from 'react'
import '../../assets/styles/Nav/nav.css'
import logotipo from '../../assets/svg/logotipo.svg'
import bars from '../../assets/svg/nav/bars.svg'
import close from '../../assets/svg/nav/close.svg'
import NavLink from './NavLink'
import { useLocation } from 'react-router-dom'
import Profile from '../../components/Profile'
import { AuthContext } from '../../utils/context/AuthContext'

const GlobalNav = () => {
  const {token, user} = useContext(AuthContext)
  return(
    <div>
      <NavLink href="/" font="bold" text="Inicio" />
      <NavLink href="/providers" font="bold" text="Proveedores" />
      <NavLink href="/posts" font="bold" text="Publicaciones" />
      {!token && !user && (
        <NavLink href="/login" font="bold" text="Iniciá sesión" />
      )}
      <NavLink href="/" font="italic" text="¿Querés formar parte de la Red de impacto ECO como Proveedor?" />
      {!token && !user && (
        <NavLink href="/register" font="bold" text="Registrate" />
      )}
    </div>
  )
}

const AdminNav = () => {
  return(
    <div>
      <NavLink href="/" font="bold" text="Dashboard Administrador"/>
      <NavLink href="/" font="bold" text="Proveedores"/>
      <NavLink href="/" font="bold" text="Publicaciones"/>
    </div>
  )
}

export default function Nav(){
    const [open, setOpen] = useState(false)
    const location = useLocation()
    
    const handleOpen = () => {
        setOpen(!open)
    }

    const isAdminRoute = () => {
      return location.pathname.startsWith('/administrador')
    }

  return(
    <nav>
        <div>
        <button>
            {
                (open === false) ?
                <img src={bars} alt="menu" className='menu'  onClick={handleOpen}/>
                :
                <img src={close} alt="close" className='menu'  onClick={handleOpen}/>
            }
        </button>
        {
            (open === true) ? 
            <ul id='nav-items'>
              {isAdminRoute() ? <AdminNav /> : <GlobalNav />}
            </ul> : 
            null
        }
        </div>
      <img src={logotipo} alt="logotipo" id="logotipo"/>
      <Profile/>
    </nav>
  )
}