import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home"
import Projects from "./pages/projects"
import Members from "./pages/members";
import AboutUs from "./pages/about-us";
import NotFound from "./pages/not-found";
import Deleranax from "./pages/members/deleranax";
import GamerMine from "./pages/members/gamermine";
import Yinx from "./pages/members/yinx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Main pages */}
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/projects' element={<Projects/>}/>
                <Route exact path='/members' element={<Members/>}/>
                <Route exact path='/about-us' element={<AboutUs/>}/>

                {/* Personal pages */}
                <Route exact path='/members/gamermine' element={<GamerMine/>}/>
                <Route exact path='/members/yinx' element={<Yinx/>}/>
                <Route exact path='/members/deleranax' element={<Deleranax/>}/>

                {/* 404 */}
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
