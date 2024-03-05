import React, {useState} from "react";
import styles from "./ProfileBar.module.css"
import {useTranslation} from "react-i18next";
import {UserData} from "../../../dataMocks/UserData";
import ThemeToggler from "../../../Utils/UtilComponents/ThemeToggler/ThemeToggler";
import LocaleSwitcher from "../../../Utils/UtilComponents/LocaleSwitcher/LocaleSwitcher";

const ProfileBarComponent: React.FC = () => {
    const {t} = useTranslation()
    const [open, setOpen] = useState(false);

    const user = UserData

    function checkUserRating() {
        let classDescriptorsArr = [styles.userRating]
        if (user.userRating > 0) {
            classDescriptorsArr.push(styles.positive)
        } else if (user.userRating < 0) {
            classDescriptorsArr.push(styles.negative)
        }
        return <div>{t("karma")}: <span className={classDescriptorsArr.join(' ')}>{user.userRating}</span></div>
    }

    return <div className={styles.ProfileBar + " ProfileBarComponent"}>
           <span className={styles.ProfileBarContainer}>
               <img className={styles.profilePicture}
                    src={user.userProfilePic}
                    alt="profile"/>
               <div className={styles.NameRating}>
                   <div className={styles.userName}>{user.userName}</div>
                   {checkUserRating()}
               </div>
               <div className={styles.tooltip} data-tooltip={t("mentions_tooltip")}>
                   <button className={styles.mentions}>🗪</button>
               </div>
               <div className={styles.tooltip} data-tooltip={t("settings_tooltip")}>
                   <button className={[styles.settings, styles.blink_me].join(" ")}  onClick={() => setOpen(!open)}>⚒</button>
                   {open && (
                       <div
                           className={styles.settingsMenu}
                           id={t('settings_tooltip')}
                           tabIndex={-1}
                       >
                           <div>{t("settings_tooltip")}</div>
                           <ThemeToggler/>
                           <LocaleSwitcher/>
                       </div>
                   )}
               </div>
           </span>
    </div>
}

export default ProfileBarComponent

