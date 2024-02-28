import React, {useEffect} from "react";
import styles from "./Comments.module.css"
import {AllCommentsData, AuthorData} from "../../dataMocks/CommentsData";
import CommentComponent from "./CommentComponent/Comment";


const CommentsComponent: React.FC = () => {
    let textAreaEl: any = null
    let formButton: any = null

    const AuthorInfo = AuthorData
    const AllComments = AllCommentsData

    useEffect(() => {
        textAreaEl = document.getElementById('commentTextArea')
        formButton = document.getElementById('submitButton')
    }, [])

    const textAreaResizeAndCheckValue = () => {
        textAreaEl.style.height = ''
        textAreaEl.style.height = textAreaEl.scrollHeight/10 + 'vh'
        if (textAreaEl.value !== '') {
            formButton.className = styles.isActive
        } else formButton.className = styles.isNotActive
    }

    return <div className={styles.comments + " CommentsComponent"}>
        <span className={styles.authorInfo}>
            <img className={styles.authorPic}
                 src="https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"
                 alt="post author"/>
            <div>
                <p className={styles.authorName}>{AuthorInfo.authorName}</p>
                <p className={styles.authorMessage}>{AuthorInfo.engagementBait}</p>
            </div>
        </span>
        <form className={styles.yourComment}>
            <img src="https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"
                 alt="you"/>
            <div className={styles.textAreaContainer}>
                <textarea id='commentTextArea' onInput={textAreaResizeAndCheckValue}
                          placeholder={"Share your thoughts here!"}
                          maxLength={5000}/>
                <button id='submitButton' type={"submit"} className={styles.isNotActive}>Comment</button>
            </div>

        </form>
        <p className={styles.commentsDisclaimer}>Comments are moderated. Please don't break the rules.</p>
        <div className={styles.allComments}>
            {AllComments.map(c =>
                <CommentComponent comment={c}/>
            )}
        </div>
    </div>
}

export default CommentsComponent

