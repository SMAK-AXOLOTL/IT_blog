import React from "react";
import styles from "./Footer.module.css"

const FooterComponent: React.FC = () => {
    return <div className={styles.footer + " FooterComponent"}>
        <span className={styles.footerContainer}>Created by <a href="https://github.com/SMAK-AXOLOTL">SMAK-AXOLOTL</a></span>
    </div>
}

export default FooterComponent

