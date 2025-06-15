import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MTermApp from "./MTermApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MTermApp />
  </StrictMode>
);
