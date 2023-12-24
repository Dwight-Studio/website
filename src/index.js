import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home"
import Projects from "./pages/projects"
import Members from "./pages/members";
import AboutUs from "./pages/about-us";
import NotFound from "./pages/not-found";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/projects' element={<Projects/>}/>
                <Route exact path='/members' element={<Members/>}/>
                <Route exact path='/about-us' element={<AboutUs/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
