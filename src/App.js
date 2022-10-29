import React from "react";
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='projects' element={<ProjectsPage />} />
    <Route path='about' element={<AboutPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
