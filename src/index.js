import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import DrawerContextProvider from "./context/DrawerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DrawerContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </DrawerContextProvider>
);
