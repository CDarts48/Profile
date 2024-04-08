import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
    return (
        <Router>
            <Helmet>
                <title>Corey Donahue's Portfolio</title>
            </Helmet>
            <Header />
            <main>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/" element={<Navigate to="/about" />} />                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;