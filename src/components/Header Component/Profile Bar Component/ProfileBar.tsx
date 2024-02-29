import React from "react";
import styles from "./ProfileBar.module.css"
import {useTranslation} from "react-i18next";

const ProfileBarComponent: React.FC = () => {
    const {t} = useTranslation()

    const User = {
        userName: "Ivan Petrov",
        userRating: 5,
    }

    function checkUserRating() {
        let classDescriptorsArr = [styles.userRating]
        if (User.userRating > 0) {
            classDescriptorsArr.push(styles.positive)
        } else if (User.userRating < 0) {
            classDescriptorsArr.push(styles.negative)
        }
        return <p>{t("karma")}: <span className={classDescriptorsArr.join(' ')}>{User.userRating}</span></p>
    }

    return <div className={styles.ProfileBar + " ProfileBarComponent"}>
           <span className={styles.ProfileBarContainer}>
               <img className={styles.profilePicture}
                    src="https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"
                    alt="avatar"/>
               <div className={styles.NameRating}>
                   <p className={styles.userName}>{User.userName}</p>
                   {checkUserRating()}
               </div>
               <div className={styles.tooltip} data-tooltip={t("mentions_tooltip")}>
                   <p className={styles.mentions}>🗪</p>
               </div>
               <div className={styles.tooltip} data-tooltip={t("settings_tooltip")}>
                    <p className={styles.settings}>⚒</p>
               </div>
           </span>
    </div>
}

export default ProfileBarComponent

