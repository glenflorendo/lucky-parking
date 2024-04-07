/* istanbul ignore file */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app";
import "@lucky-parking/ui/ui.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);