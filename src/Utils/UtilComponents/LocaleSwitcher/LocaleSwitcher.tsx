import React from "react";
import styles from "./LocaleSwitcher.module.css"
import {useTranslation} from "react-i18next";
import {supportedLanguages} from "../../../i18n/config";
const LocaleSwitcherComponent: React.FC = () => {
    const {i18n} = useTranslation()

   return <div className={styles.localeSwitcher}>
        <div>
            <select value={i18n.resolvedLanguage} onChange={ (e) => i18n.changeLanguage(e.target.value)}>
                {Object.entries(supportedLanguages).map(([code, name]) => (
                    <option value={code} key={code}>{name}</option>
                ))}
            </select>
        </div>
   </div>
}

export default LocaleSwitcherComponent

