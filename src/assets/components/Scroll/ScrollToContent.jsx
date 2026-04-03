import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToContent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elemento = document.getElementById(location.hash.replace("#", ""));
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToContent;
