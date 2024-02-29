import React from "react";
import styles from "./Footer.module.css"
import {useTranslation} from "react-i18next";

const FooterComponent: React.FC = () => {
    const {t} = useTranslation()
    return <div className={styles.footer + " FooterComponent"}>
        <span className={styles.footerContainer}>{t("created_by")} <a href="https://github.com/SMAK-AXOLOTL">SMAK-AXOLOTL</a></span>
    </div>
}

export default FooterComponent

