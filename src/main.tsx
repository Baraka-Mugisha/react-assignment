import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
