import React from "react";
import styles from "./Comments.module.css"

const CommentsComponent: React.FC = () => {
    return <div className={styles.comments + " CommentsComponent"}>
        <p>Comments</p>
    </div>
}

export default CommentsComponent

