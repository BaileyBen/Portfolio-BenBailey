import React from "react";
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
    <Route path='Portfolio-BenBailey/' element={<HomePage />} />
    <Route path='projects' element={<ProjectsPage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='skills' element={<SkillsPage />} />
    <Route path='contact' element={<ContactPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
