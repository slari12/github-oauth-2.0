import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/auth/callback"
          element={
            <div>
              <p>sample dashboard</p>
            </div>
          }
        />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
