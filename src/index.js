import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import StyledComponent from "./components/StyledComponent";
import TailwindComponent from "./components/TailwindComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Button1/>
        <Button2/>
        <StyledComponent/>
        <TailwindComponent/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
