import React from "react";
import styles from "./ProfileBar.module.css"
import {useTranslation} from "react-i18next";
import {UserData} from "../../../dataMocks/UserData";
import PopUp from "../../PopUp Component/PopUp";
//TODO: fix settings tooltip position, add settings button flashing
const ProfileBarComponent: React.FC = () => {
    const {t} = useTranslation()

    const user = UserData

    function checkUserRating() {
        let classDescriptorsArr = [styles.userRating]
        if (user.userRating > 0) {
            classDescriptorsArr.push(styles.positive)
        } else if (user.userRating < 0) {
            classDescriptorsArr.push(styles.negative)
        }
        return <p>{t("karma")}: <span className={classDescriptorsArr.join(' ')}>{user.userRating}</span></p>
    }

    return <div className={styles.ProfileBar + " ProfileBarComponent"}>
           <span className={styles.ProfileBarContainer}>
               <img className={styles.profilePicture}
                    src={user.userProfilePic}
                    alt="profile"/>
               <div className={styles.NameRating}>
                   <p className={styles.userName}>{user.userName}</p>
                   {checkUserRating()}
               </div>
               <div className={styles.tooltip} data-tooltip={t("mentions_tooltip")}>
                   <p className={styles.mentions}>🗪</p>
               </div>
               <div className={styles.tooltip} data-tooltip={t("settings_tooltip")}>
                    <PopUp idMessage={"settings"}/>
               </div>
           </span>
    </div>
}

export default ProfileBarComponent

