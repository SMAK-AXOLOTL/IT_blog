import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderComponent from "./components/Header Component/Header";
import AdComponent from "./components/Ad Component/Ad";
import NavBarComponent from "./components/NavBar Component/NavBar";
import ContentComponent from "./components/Content Component/Content";
import FooterComponent from "./components/Footer Component/Footer";

function App() {
    const [isOpen, setOpen] = useState(false)
    function Scrolldown() {
        window.scroll(0, 142);
    }

    window.onload = Scrolldown;

    useEffect( () => {
        if (window.innerWidth > 1270) setOpen(true)
    },[] )

    return <div className="container">
        <AdComponent/>
        <HeaderComponent setOpen={setOpen} open={isOpen}/>
        {isOpen && <NavBarComponent/>}
        <ContentComponent/>
        <FooterComponent/>
    </div>
}

export default App;
