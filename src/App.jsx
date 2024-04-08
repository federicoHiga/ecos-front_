import React, { useState } from "react";
import Inicio from "./modules/Inicio/Inicio";
import { Route, Routes } from "react-router-dom";
import Register from "./modules/Login/Register";
import SignIn from "./modules/Login/SingnIn";
import Nav from "./modules/Nav/Nav";
import { AuthProvider } from "./utils/context/AuthContext";
import PostsView from "./modules/PostsView";
import ProvidersHome from "./modules/Providers/ProvidersHome";
import ProvidersDetail from "./modules/Providers/ProvidersDetail";
import AlertModal from "./components/modals/alertErrorSucces/alertErrorSuccesModal";
import IndexFile from "./components/cloudinary/IndexFile";
import ProvidersProfile from "./modules/Providers/ProvidersProfile";
import AdminDashboard from "./modules/dashboard/administrador/adminDashboard";
import ProvidersForm from "./modules/Providers/ProvidersForm";

function App() {
  return (
    <AuthProvider>
      <Nav />

      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />}></Route>

        {/* Ruta de registro */}
        <Route path="/register" element={<Register />} />

        {/* Ruta de proveedores (visitante) */}
        <Route path="/providers" element={<ProvidersHome />} />
        <Route path="/posts" element={<PostsView />} />
        <Route path="/providers/:id" element={<ProvidersDetail />} />
        <Route path="/providers/profile" element={<ProvidersProfile />} />
        <Route path="/providers/profile/postProduct" element={<ProvidersForm />} />

        {/* Ruta de proveedores (visitante) */}
        <Route path="login" element={<SignIn />} />

        {/* Ruta de proveedores (dashboard) */}
        <Route path="miProfile">
          <Route index element={""} />
          <Route path="providers" element={""} />
          <Route path="newProvider" element={""} />
        </Route>

        {/* Ruta de administrador (dashboard) */}
        <Route path="admin">
          <Route index element={< AdminDashboard/>} />
          <Route path="providers" element={""} />
          <Route path="publications" element={""} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
