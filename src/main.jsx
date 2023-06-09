import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ImageLightboxProvider } from "components/hooks/useImageLightbox";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ImageLightboxProvider>
        <App />
      </ImageLightboxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
