import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home"
import Projects from "./pages/projects"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/projects/' element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
