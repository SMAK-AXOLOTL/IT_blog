import React from 'react';
import './App.css';
import HeaderComponent from "./components/Header Component/Header";
import AdComponent from "./components/Ad Component/Ad";
import NavBarComponent from "./components/NavBar Component/NavBar";
import ContentComponent from "./components/Content Component/Content";
import FooterComponent from "./components/Footer Component/Footer";


function App() {
    function Scrolldown() {
        window.scroll(0, 142);
    }

    window.onload = Scrolldown;

    return <div className="container">
        <AdComponent/>
        <HeaderComponent/>
        <NavBarComponent/>
        <ContentComponent/>

        <FooterComponent/>

    </div>
}

export default App;
