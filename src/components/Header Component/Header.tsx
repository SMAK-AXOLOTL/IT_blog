import React from "react";
import styles from "./Header.module.css"

const HeaderComponent: React.FC = () => {
    return <div className={styles.Header + " HeaderComponent"}>
            <span className={styles.HeaderLeft}>
            <img src="https://catalog-aktsiy.ru/wp-content/uploads/test_logo-335x220.png" alt="blog logo"
                 height="60px"/>
            <a href="https://smak-axolotl.github.io/social-network/#/login">Social Network</a>
            <a>Wow so button!</a>
            </span>
        <a className={styles.whiteBorder}>This one is also a button!</a>
    </div>
}

export default HeaderComponent

