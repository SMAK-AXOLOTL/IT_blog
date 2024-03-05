import React from "react";
import styles from "./NavBar.module.css"
import {useTranslation} from "react-i18next";

const NavBarComponent: React.FC = () => {
    const {t} = useTranslation()

    return <div className={styles.navBar + " NavBarComponent"}>
        <div className={styles.navButtons}>
            <div className={styles.section}>{t("services")}</div>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <div className={styles.button} style={{marginRight:'3%'}}>🔢</div>
                    <div className={styles.button}>{t("calculator")}</div>
                </div>
            </button>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <div className={styles.button} style={{marginRight:'3%'}}>📅</div>
                    <div className={styles.button}>{t("events")}</div>
                </div>
            </button>
            <div className={styles.divider}/>
            <div className={styles.section}>{t("podcasts")}</div>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <div className={styles.button} style={{marginRight:'3%'}}>💻</div>
                    <div className={styles.button}>{t("techs")}</div>
                </div>
            </button>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <div className={styles.button} style={{marginRight:'3%'}}>👔</div>
                    <div className={styles.button}>{t("job_search")}</div>
                </div>
            </button>
            <button className={styles.navBarButton}>
                <div className={styles.buttonContentWrapper}>
                    <div className={styles.button} style={{marginRight:'3%'}}>🤫</div>
                    <div className={styles.button}>{t("gossips")}</div>
                </div>
            </button>
            <button className={[styles.navBarButton,styles.bold].join(' ')}>{t("see_all")} ➜</button>
        </div>
    </div>
}

export default NavBarComponent

