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
import PostsAdmin from "./modules/Admin/PostsAdmin";
import LoadPost from "./modules/Admin/PostsForm/LoadPost";
import EditPost from "./modules/Admin/PostsForm/EditPost";
import ProvidersForm from "./modules/Providers/ProvidersForm";
import AdminListProviders from "./modules/dashboard/administrador/adminListProviders";
import AdminPublications from "./modules/dashboard/administrador/adminPublications";
import NewPublication from "./modules/dashboard/administrador/AdminNewPublication";
import * as webAppRoutes from './constants/webAppRoutes'

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

        {/* Ruta de proveedores (visitante) */}
        <Route path="login" element={<SignIn />} />

        {/* Rutas de usuario proveedor */}
        <Route path={webAppRoutes.PROVIDER_PROFILE.path} element={webAppRoutes.PROVIDER_PROFILE.element} />
        <Route path={webAppRoutes.CREATE_PRODUCT.path} element={webAppRoutes.CREATE_PRODUCT.element} />
        <Route path={webAppRoutes.UPDATE_PRODUCT.path} element={webAppRoutes.UPDATE_PRODUCT.element} />

        {/* Rutas de usuario admin */}
        <Route path={webAppRoutes.ADMIN_DASHBOARD.path} element={webAppRoutes.ADMIN_DASHBOARD.element} />
        <Route path={webAppRoutes.PROVIDERS_LIST.path} element={webAppRoutes.PROVIDERS_LIST.element} />
        <Route path={webAppRoutes.POSTS_LIST.path} element={webAppRoutes.POSTS_LIST.element} />
        <Route path={webAppRoutes.CREATE_POST.path} element={webAppRoutes.CREATE_POST.element} />
        <Route path={webAppRoutes.UPDATE_POST.path} element={webAppRoutes.UPDATE_POST.element} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
