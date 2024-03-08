import React, { useState } from "react";
import Inicio from "./modules/Inicio/Inicio";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./modules/Login/Register";
import SignIn from "./modules/Login/SingnIn";
import Nav from "./modules/Nav/Nav";
import PostsSection from "./modules/PostsSection";
import SuppliersSection from "./modules/SuppliersSection";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      <Nav />

      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />}></Route>

        {/* Ruta de registro */}
        <Route path="register" element={<Register />} />

        {/* Ruta de proveedores (visitante) */}
        <Route path="proveedores" element={<SuppliersSection/>} />

        {/* Ruta de proveedores (visitante) */}
        <Route path="login" element={<SignIn />} />

        {/* Ruta de proveedores (dashboard) */}
        <Route path="miPerfil">
          <Route path="misProductos" element={""} />
          <Route path="nuevoProducto" element={""} />
        </Route>

        {/* Ruta de administrador (dashboard) */}
        <Route path="administrador">
          <Route index element={""} />
          <Route path="proveedores" element={""} />
          <Route path="publicaciones" element={""} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
