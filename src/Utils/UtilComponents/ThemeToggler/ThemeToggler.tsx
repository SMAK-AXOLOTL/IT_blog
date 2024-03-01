import React from "react";
import styles from "./ThemeToggler.module.css"
import {useTranslation} from "react-i18next";
import useColorTheme from "use-color-theme";
const ThemeTogglerComponent: React.FC = () => {
    const {t} = useTranslation()

    const colorTheme = useColorTheme('light-theme', {
        classNames: ['light-theme', 'dark-theme']
    });

   return <div className={styles.themeToggler}>
       <button className={styles.themeToggleButton} onClick={colorTheme.toggle}>{t("theme_toggle")}</button>
   </div>
}

export default ThemeTogglerComponent

