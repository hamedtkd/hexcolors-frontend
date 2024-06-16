import { Header } from "./components/Layout/Header.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="http://localhost:5173/docs/tonconnect-manifest.json">
      <Header />
      
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
