import React from "react";
import styles from "./Comments.module.css"

// TODO: finish comments section
const CommentsComponent: React.FC = () => {

    const AuthorInfo = {
        authorName: "Marry Poppins",
        engagementBait: "Look at this beautiful copy-paste I found online! Tell me what you think about it in the comments"

    }

    return <div className={styles.comments + " CommentsComponent"}>
        <span className={styles.authorInfo}>
            <img className={styles.authorPic} src="https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg" alt="post author"/>
            <div>
                <p className={styles.authorName}>{AuthorInfo.authorName}</p>
                <p className={styles.authorMessage}>{AuthorInfo.engagementBait}</p>
            </div>
        </span>
        <div className={styles.yourComment}>
            <img src="https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg" alt="you"/>
            <textarea/>
        </div>
        <p>Comments are moderated. Please don't break the rules.</p>
        <div>Comments here</div>
    </div>
}

export default CommentsComponent

