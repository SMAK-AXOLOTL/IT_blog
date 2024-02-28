import React from "react";
import styles from "./NavBar.module.css"

const NavBarComponent: React.FC = () => {
    return <div className={styles.navBar + " NavBarComponent"}>
        <div className={styles.navButtons}>
            <h2>Services</h2>
            <button className={styles.navBarButton}>☆Calculator</button>
            <button className={styles.navBarButton}>☆Events</button>
            <div className={styles.divider}/>
            <h2>Podcasts</h2>
            <button className={styles.navBarButton}>☆Technologies</button>
            <button className={styles.navBarButton}>☆Job search</button>
            <button className={styles.navBarButton}>☆Gossips</button>
            <button className={styles.navBarButton + ' ' + styles.bold}>See all ➜</button>
        </div>
    </div>
}

export default NavBarComponent

