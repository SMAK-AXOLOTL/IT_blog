import React from "react";
import styles from "./NavBar.module.css"
import {useTranslation} from "react-i18next";

//TODO: icons
const NavBarComponent: React.FC = () => {
    const {t} = useTranslation()

    return <div className={styles.navBar + " NavBarComponent"}>
        <div className={styles.navButtons}>
            <h2>{t("services")}</h2>
            <button className={styles.navBarButton}>☆{t("calculator")}</button>
            <button className={styles.navBarButton}>☆{t("events")}</button>
            <div className={styles.divider}/>
            <h2>{t("podcasts")}</h2>
            <button className={styles.navBarButton}>☆{t("techs")}</button>
            <button className={styles.navBarButton}>☆{t("job_search")}</button>
            <button className={styles.navBarButton}>☆{t("gossips")}</button>
            <button className={styles.navBarButton + ' ' + styles.bold}>{t("see_all")} ➜</button>
        </div>
    </div>
}

export default NavBarComponent

