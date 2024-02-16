import React from "react";
import styles from "./NavBar.module.css"

const NavBarComponent: React.FC = () => {
    return <div className={styles.navBar + " NavBarComponent"}>
        <div className={styles.navButtons}>
            <a><img src="https://snabbacasinon.net/wp-content/uploads/2021/09/easy-img-150x150.png" height="20px" alt="icon"/>Calculator</a>
            <a><img src="https://snabbacasinon.net/wp-content/uploads/2021/09/easy-img-150x150.png" height="20px" alt="icon"/>Events</a>
            <div className={styles.divider}/>
            <h2>Podcasts</h2>
            <a><img src="https://snabbacasinon.net/wp-content/uploads/2021/09/easy-img-150x150.png" height="20px" alt="icon"/>Technologies</a>
            <a><img src="https://snabbacasinon.net/wp-content/uploads/2021/09/easy-img-150x150.png" height="20px" alt="icon"/>Job search</a>
            <a><img src="https://snabbacasinon.net/wp-content/uploads/2021/09/easy-img-150x150.png" height="20px" alt="icon"/>Gossips</a>
            <a>See all <img src="https://cdn.icon-icons.com/icons2/3404/PNG/128/right_chevron_icon_216031.png" height="20px" alt="arrow"/></a>
        </div>
    </div>
}

export default NavBarComponent

