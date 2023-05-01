import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import DataProvider from "./contexts/DataContext/DataContext";
import TechProvider from "./contexts/TechContext/techContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);