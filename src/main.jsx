import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotosProvider from "./contexts/PhotosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/mod5-react2-context">
      <PhotosProvider>
        <App />
      </PhotosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
