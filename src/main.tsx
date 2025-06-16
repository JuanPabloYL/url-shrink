import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthContext.tsx";
import { UrlProvider } from "./auth/context/UrlContext.tsx";
import { NotificationProvider } from "./auth/context/NotificationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <UrlProvider>
            <App />
          </UrlProvider>
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  </StrictMode>
);
