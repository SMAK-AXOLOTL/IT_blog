import React from "react";
import styles from "./Header.module.css"
import ProfileBarComponent from "./Profile Bar Component/ProfileBar";
import {useTranslation} from "react-i18next";
import axolotl from "../../logo.png"

const HeaderComponent: React.FC = () => {
    const {t} = useTranslation()

    return <div className={styles.Header + " HeaderComponent"}>
            <span className={styles.HeaderLeft}>
                <img src={axolotl} alt="blog logo"/>
                <a href={'https://smak-axolotl.github.io/social-network/#/login'} className={styles.button}>🌐{t("social_network")}</a>
                <button className={styles.button}>🎬{t("css_animation")}</button>
            </span>
        <div className={styles.HeaderRight}>
            <ProfileBarComponent/>
        </div>
    </div>
}

export default HeaderComponent

