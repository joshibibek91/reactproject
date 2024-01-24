import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./src/App"
import Header from "./src/pages/Header/Header";

import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.querySelector('#root')).render(

    <BrowserRouter>
    <>
    
    <App/>
    </>
    </BrowserRouter>
)