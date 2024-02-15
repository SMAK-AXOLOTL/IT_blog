import React from "react";
import styles from "./NavBar.module.css"

const NavBarComponent: React.FC = () => {
    return <div className={styles.navBar + " NavBarComponent"}>
            <p>NavBar</p>
    </div>
}

export default NavBarComponent

