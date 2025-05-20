import "@radix-ui/themes/styles.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Instructions from "./Instructions.tsx";
import Privacy from "./Privacy";
import Terms from "./Terms";
import ScrollToTop from "./ScrollToTop..tsx";
import Contact from "./Contact.tsx";
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
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
