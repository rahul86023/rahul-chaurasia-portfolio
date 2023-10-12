import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { MainLayout } from "./components/layouts/MainLayout";

import Header from './components/Header';
import About from './components/About';
 import Portfolio from './components/Port';

import Contact from './components/Contact';
import Navigation from './components/Navigation';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <>
      <Router>
      <Navigation /> 
        <Routes>
          <Route path="/rahul-chaurasia-portfolio/" element={<MainLayout />}>
            <Route index element={<Header />} />
            <Route
              path="about"
              element={<About />}
            />
            <Route
              path="portfolio"
              element={<Portfolio />}
            />
            

            <Route
              path="contact"
              element={<Contact />}
            />

          
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
