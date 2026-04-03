import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/global.css";
import "./assets/styles/variaveis.css";
import ScrollToContent from "./assets/components/Scroll/ScrollToContent.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToContent />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
