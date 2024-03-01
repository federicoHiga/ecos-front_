import React from 'react'
import NavLink from './NavComponents/NavLink'
import Nav from './NavComponents/Nav'

 const linksprops = [
     {id : 1, font : 'bold', text : 'Inicio', href : ''},
     {id : 2, font : 'bold', text : 'Proveedores', href : ''},
     {id : 3, font : 'bold', text : 'Publicaciones', href : ''},
     {id : 4, font : 'bold', text : 'Iniciá sesión', href : ''},
     {id : 5, font : 'italic', text : '¿Querés formar parte de la Red de impacto ECO como Proveedor?', href : ''},
     {id : 6, font : 'bold', text : 'Registrate', href : ''},
 ]

export default function NavGlobal(){
    const links = linksprops.map(linkprop => {
        return <NavLink key= {`nav-link-${linkprop.id}`} text={linkprop.text} font={linkprop.font} href={linkprop.href}/>
    })
    return(
        <Nav links={links}/>
    )
}