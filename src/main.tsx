import "@radix-ui/themes/styles.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Instructions from "./Instructions.tsx";
import { StrictMode } from "react";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme
        appearance="dark"
        accentColor="indigo"
        grayColor="sand"
        radius="large"
        scaling="100%"
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
