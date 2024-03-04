import React from "react";
import Inicio from "./modules/Inicio/Inicio";
import { Route, Router, Routes } from "react-router-dom";
import NavGlobal from "./modules/Nav/NavGlobal";
import Register from "./modules/Login/Register";
import LoginCard from "./modules/Login/LoginCard/LoginCard";

function App() {
  return (
    <>
      <NavGlobal />
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />}></Route>

        {/* Ruta de registro */}
        <Route path="register" element={<Register />} />

        {/* Ruta de proveedores (visitante) */}
        <Route path="proveedores" element={""} />

        {/* Ruta de proveedores (visitante) */}
        <Route path="login" element={<LoginCard />} />

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
