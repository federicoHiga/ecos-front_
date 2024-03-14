import React, { useState } from "react";
import Inicio from "./modules/Inicio/Inicio";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./modules/Login/Register";
import SignIn from "./modules/Login/SingnIn";
import Nav from "./modules/Nav/Nav";
import PostsView from "./modules/PostsView";
import SuppliersSection from "./modules/SuppliersSection";
import CategoriesHome from "./modules/Categories/views/CategoriesHome";
import CategoriesDetail from "./modules/Categories/views/CategoriesDetail";
import Providers from "./modules/Providers";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />}></Route>

        {/* Ruta de registro */}
        <Route path="register" element={<Register />} />

        {/* Ruta de proveedores (visitante) */}
        <Route path="proveedores" element={<SuppliersSection />} />
        <Route path="proveedores" element={<Providers/>} />

        {/* Ruta de publicaciones (visitante) */}
        <Route path="publicaciones" element={<PostsView />} />

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

        <Route path="/categories" element={<CategoriesHome />} />
        <Route path="/categories/:category" element={<CategoriesDetail />} />
      </Routes>
    </>
  );
}

export default App;
