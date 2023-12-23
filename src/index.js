import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './base/header/Title';
import TitleHeader from "./base/header/TitleHeader";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Title/>
        <TitleHeader/>

        <div className="TestDiv"/>
    </React.StrictMode>
);
