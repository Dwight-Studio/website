import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './base/header/Title';
import Header from "./base/header/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Title/>
        <Header/>

        <div className="TestDiv"/>
    </React.StrictMode>
);
