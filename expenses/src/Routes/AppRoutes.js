import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated imports
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>  // Updated component
                <Route path="/" element={<HomePage />} />  // Updated syntax for v6
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
