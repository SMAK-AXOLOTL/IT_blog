import React from "react";
import styles from "./NavBar.module.css"
import {useTranslation} from "react-i18next";

//TODO: icons
const NavBarComponent: React.FC = () => {
    const {t} = useTranslation()

    return <div className={styles.navBar + " NavBarComponent"}>
        <div className={styles.navButtons}>
            <h2>{t("services")}</h2>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <span style={{marginRight:'3%'}}>🔢</span>
                    <span>{t("calculator")}</span>
                </div>
            </button>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <span style={{marginRight:'3%'}}>📅</span>
                    <span>{t("events")}</span>
                </div>
            </button>
            <div className={styles.divider}/>
            <h2>{t("podcasts")}</h2>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <span style={{marginRight:'3%'}}>💻</span>
                    <span>{t("techs")}</span>
                </div>
            </button>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <span style={{marginRight:'3%'}}>👔</span>
                    <span>{t("job_search")}</span>
                </div>
            </button>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <span style={{marginRight:'3%'}}>🤫</span>
                    <span>{t("gossips")}</span>
                </div>
            </button>
            <button className={[styles.navBarButton,styles.bold].join(' ')}>{t("see_all")} ➜</button>
        </div>
    </div>
}

export default NavBarComponent

