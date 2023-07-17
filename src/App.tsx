import React from "react";
import "./App.css";
import Main from "./components/Layout/Main";
import DashBoard from "./components/Layout/DashBoard";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import About from "./components/Layout/About";
import Anomalies from "./components/Layout/Anomalies";
import NotFound from "./components/Layout/NotFound";

function App() {
  return (
    <Main>
      <Routes>
        <Route index element={<DashBoard />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="anomalies" element={<Anomalies />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Main>
  );
}

export default App;
