import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResponsePage from "./pages/ResponsePage";
import "./style.css";
import VisualizationPage from "./pages/VisualizationPage";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <Navbar />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/response" element={<ResponsePage/>} />
          <Route path="/visualization" element={<VisualizationPage/>} />
          {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
