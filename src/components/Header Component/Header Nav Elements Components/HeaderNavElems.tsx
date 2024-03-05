import React, {Dispatch} from "react";
import styles from "./HeaderNavElems.module.css"
import {useTranslation} from "react-i18next";
import axolotl from "../../../logo.png"

type PropsType = {
    setOpen: Dispatch<any>,
    open: boolean
}
const HeaderNavElemsComponent: React.FC<PropsType> = ({setOpen, open}) => {
    const {t} = useTranslation()

    function openNavBar () {
        if (window.innerWidth < 1270){
            setOpen(!open)
        }
    }

    return <span className={styles.HeaderLeft}>
                <img src={axolotl} className={[styles.image, styles.blink_me].join(' ')} alt="blog logo" onClick={openNavBar}/>
                <a href={'https://smak-axolotl.github.io/social-network/#/login'} className={styles.button}>
                    🌐<span className={styles.buttonText}>{t("social_network")}</span>
                </a>
                <a href={''} className={styles.button}>
                    🎬<span className={styles.buttonText}>{t("css_animation")}</span>
                </a>
            </span>
}

export default HeaderNavElemsComponent

