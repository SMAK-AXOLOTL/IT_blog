import React from "react";
import styles from "./Header.module.css"
import ProfileBarComponent from "./Profile Bar Component/ProfileBar";
import logo from "../../logo.svg"
import {useTranslation} from "react-i18next";

const HeaderComponent: React.FC = () => {
    const {t} = useTranslation()

    return <div className={styles.Header + " HeaderComponent"}>
            <span className={styles.HeaderLeft}>
                <img src="https://catalog-aktsiy.ru/wp-content/uploads/test_logo-335x220.png" alt="blog logo"
                     height="60px"/>
                <a href={'https://smak-axolotl.github.io/social-network/#/login'} className={styles.button}><img src={logo} alt={'react'}/>{t("social_network")}</a>
                <button className={styles.button}>{t("css_animation")}</button>
            </span>
        <div className={styles.HeaderRight}>
            <ProfileBarComponent/>
        </div>
    </div>
}

export default HeaderComponent

