import React, { useState } from "react";
import "../../assets/styles/Nav/nav.css";
import logotipo from "../../assets/svg/image 33 (1).png";
import bars from "../../assets/svg/nav/bars.svg";
import close from "../../assets/svg/nav/close.svg";
import NavLink from "./NavLink";
import Profile from '../../components/Profile'
import { useLocation } from "react-router-dom";

const GlobalNav = () => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  return (
    <div>
      <NavLink href="/" font="bold" text="Inicio" />
      <NavLink href="/providers" font="bold" text="Proveedores" />
      <NavLink href="/posts" font="bold" text="Publicaciones" />
      {!user && <NavLink href="/login" font="bold" text="Iniciá sesión" />}
      <NavLink
        href="/"
        font="italic"
        text="¿Querés formar parte de la Red de impacto ECO como Proveedor?"
      />
      {!user && <NavLink href="/register" font="bold" text="Registrate" />}
    </div>
  );
};

const AdminNav = () => {
  return (
    <div>
      <NavLink href="/" font="bold" text="Dashboard Administrador" />
      <NavLink href="/admin/providers" font="bold" text="Proveedores" />
      <NavLink href="/admin/publications" font="bold" text="Publicaciones" />
      <NavLink href="/" font="bold" text="Logout" />
    </div>
  );
};
const ProviderNav = () => {
  return (
    <div>
      <NavLink href="/" font="bold" text="Dashboard Proveedor" />
      <NavLink href="/miProfile/providers" font="bold" text="Proveedores" />
      <NavLink href="/miProfile/newProvider" font="bold" text="Publicaciones" />
      <NavLink href="/" font="bold" text="Logout" />
    </div>
  );
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleOpen = () => {
    setOpen(!open);
  };

  const isAdminRoute = () => {
    return location.pathname.startsWith("/admin");
  };
  const isProviderRoute = () => {
    return location.pathname.startsWith("/miProfile");
  };

  return (
    <nav>
      <div>
        <button>
          {open === false ? (
            <img src={bars} alt="menu" className="menu" onClick={handleOpen} />
          ) : (
            <img src={close} alt="close" className="menu" onClick={handleOpen} />
          )}
        </button>
        {open === true ? (
          <ul id="nav-items">{isAdminRoute() ? <AdminNav /> : <GlobalNav />}</ul>
        ) : null}
      </div>
      <img src={logotipo} alt="logotipo" id="logotipo" />
      <Profile />
    </nav>
  );
}
