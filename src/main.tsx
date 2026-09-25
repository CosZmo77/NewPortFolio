import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ArrivalGate from "./components/ArrivalGate";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ArrivalGate><App /></ArrivalGate>
  </React.StrictMode>
);
