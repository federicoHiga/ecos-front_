import React, { useState } from "react";
import "../../assets/styles/Nav/nav.css";
import logotipo from "../../assets/svg/logotipo.svg";
// import logotipo from "../../assets/svg/image 33 (1).png";
import bars from "../../assets/svg/nav/bars.svg";
import close from "../../assets/svg/nav/close.svg";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";

const GlobalNav = () => {
  return (
    <div>
      <NavLink href="/" font="bold" text="Inicio" />
      <NavLink href="/providers" font="bold" text="Proveedores" />
      <NavLink href="/posts" font="bold" text="Publicaciones" />
      <NavLink href="/login" font="bold" text="Iniciá sesión" />
      <NavLink
        href="/"
        font="italic"
        text="¿Querés formar parte de la Red de impacto ECO como Proveedor?"
      />
      <NavLink href="/register" font="bold" text="Registrate" />
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

export default function Nav({ isAdmin }) {
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
            <img
              src={close}
              alt="close"
              className="menu"
              onClick={handleOpen}
            />
          )}
        </button>
        {open === true ? (
          <ul id="nav-items">
            {isAdminRoute() ? <AdminNav /> : null}
            {isProviderRoute() ? <ProviderNav /> : null}
            {!isProviderRoute() && !isAdminRoute() ? <GlobalNav /> : null}
          </ul>
        ) : null}
      </div>
      <img src={logotipo} alt="logotipo" id="logotipo" />
    </nav>
  );
}
