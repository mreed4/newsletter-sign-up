import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext.jsx";

import App from "./App.jsx";
import StartPage from "./StartPage.jsx";
import ThankYouPage from "./ThankYouPage.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<StartPage />} />
            <Route path="thank-you" element={<ThankYouPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
