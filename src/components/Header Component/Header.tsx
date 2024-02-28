import React from "react";
import styles from "./Header.module.css"
import ProfileBarComponent from "./Profile Bar Component/ProfileBar";
import useColorTheme from "use-color-theme";
import logo from "../../logo.svg"
const HeaderComponent: React.FC = () => {
    const colorTheme = useColorTheme('light-theme', {
        classNames: ['light-theme', 'dark-theme']
    });

    return <div className={styles.Header + " HeaderComponent"}>
            <span className={styles.HeaderLeft}>
            <img src="https://catalog-aktsiy.ru/wp-content/uploads/test_logo-335x220.png" alt="blog logo"
                 height="60px"/>
            <a href={'https://smak-axolotl.github.io/social-network/#/login'} className={styles.button}><img src={logo} alt={'react'}/>Social Network</a>
            <button className={styles.button}>CSS animation showcase</button>
            </span>
        <div className={styles.HeaderRight}>
            <ProfileBarComponent/>
            <button className={styles.themeToggleButton} onClick={colorTheme.toggle}>A eto che takoe?</button>
        </div>


    </div>
}

export default HeaderComponent

