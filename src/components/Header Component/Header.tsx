import React from "react";
import styles from "./Header.module.css"
import ProfileBarComponent from "./Profile Bar Component/ProfileBar";

const HeaderComponent: React.FC = () => {
    return <div className={styles.Header + " HeaderComponent"}>
            <span className={styles.HeaderLeft}>
            <img src="https://catalog-aktsiy.ru/wp-content/uploads/test_logo-335x220.png" alt="blog logo"
                 height="60px"/>
            <a href="https://smak-axolotl.github.io/social-network/#/login">Social Network</a>
            <a>CSS animation showcase</a>
            </span>
        <ProfileBarComponent/>
    </div>
}

export default HeaderComponent

