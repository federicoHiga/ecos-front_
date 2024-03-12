import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="739667084030-pk65jkf718r56763mjf0t76d3m5j744s.apps.googleusercontent.com">
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
