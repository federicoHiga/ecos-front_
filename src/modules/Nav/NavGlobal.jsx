import React from 'react'
import NavLink from './NavComponents/NavLink'
import Nav from './NavComponents/Nav'

 const linksprops = [
     {font : 'bold', text : 'Inicio', href : ''},
     {font : 'bold', text : 'Proveedores', href : ''},
     {font : 'bold', text : 'Publicaciones', href : ''},
     {font : 'bold', text : 'Iniciá sesión', href : ''},
     {font : 'italic', text : '¿Querés formar parte de la Red de impacto ECO como Proveedor?', href : ''},
     {font : 'bold', text : 'Registrate', href : ''},
 ]

export default function NavGlobal(){
    const links = linksprops.map(linkprop => {
        return <NavLink text={linkprop.text} font={linkprop.font} href={linkprop.href}/>
    })
    return(
        <Nav links={links}/>
    )
}