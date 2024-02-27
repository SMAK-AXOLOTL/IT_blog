import React from 'react';
import './App.css';
import HeaderComponent from "./components/Header Component/Header";
import AdComponent from "./components/Ad Component/Ad";
import NavBarComponent from "./components/NavBar Component/NavBar";
import ContentComponent from "./components/Content Component/Content";
import FooterComponent from "./components/Footer Component/Footer";
import ControlsComponent from "./components/Controls Component/Controls";
import CommentsComponent from "./components/Comments Component/Comments";

//TODO: change color scheme to something less awful
function App() {
    function Scrolldown() {
        window.scroll(0, 102);
    }

    window.onload = Scrolldown;

    return (
        <div className="container">
            <AdComponent/>
            <HeaderComponent/>
            <NavBarComponent/>
            <ContentComponent/>
            <CommentsComponent/>
            <FooterComponent/>
            <ControlsComponent/>
        </div>
    );
}

export default App;
