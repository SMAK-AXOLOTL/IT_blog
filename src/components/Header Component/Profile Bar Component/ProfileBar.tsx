import React from "react";
import styles from "./ProfileBar.module.css"

const ProfileBarComponent: React.FC = () => {
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
        return <p>Updoots: <span className={classDescriptorsArr.join(' ')}>{User.userRating}</span></p>
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
               <div className={styles.tooltip} data-tooltip="mentions">
                   <img className={styles.icon}
                        src="https://snabbacasinon.net/wp-content/uploads/2021/09/easy-img-150x150.png" alt="mentions"
                   />
               </div>
               <div className={styles.tooltip} data-tooltip="settings">
                    <img className={styles.icon}
                         src="https://snabbacasinon.net/wp-content/uploads/2021/09/easy-img-150x150.png" alt="settings"
                    />
               </div>
           </span>
    </div>
}

export default ProfileBarComponent

