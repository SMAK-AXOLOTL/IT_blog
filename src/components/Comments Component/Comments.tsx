import React, {useEffect, useRef} from "react";
import styles from "./Comments.module.css"
import {AllCommentsData} from "../../dataMocks/CommentsData";
import CommentComponent from "./CommentComponent/Comment";
import {useTranslation} from "react-i18next";
import {AuthorData} from "../../dataMocks/AuthorData";

type PropsType = {
    authorInfo: typeof AuthorData,
    allComments: typeof AllCommentsData
}

const CommentsComponent: React.FC<PropsType> = ({authorInfo, allComments}) => {
    const {t} = useTranslation()

    let textAreaEl:any = useRef(null)
    let formButton:any = useRef(null)

    useEffect(() => {
        textAreaEl.current = document.getElementById("commentTextArea")
        formButton.current = document.getElementById("submitButton")
    }, [])


    const textAreaResizeAndCheckValue = () => {
        textAreaEl.current.style.height = ''
        textAreaEl.current.style.height = textAreaEl.current.scrollHeight / 10 + 'vh'
        if (textAreaEl.current.value !== '') {
            formButton.current.className = styles.isActive
        } else formButton.current.className = styles.isNotActive
    }

    return <div className={styles.comments + " CommentsComponent"}>
        <span className={styles.authorInfo}>
            <img className={styles.authorPic}
                 src={authorInfo.authorImg}
                 alt="post author"/>
            <div>
                <p className={styles.authorName}>{authorInfo.authorName}</p>
                <p className={styles.authorMessage}>{authorInfo.engagementBait}</p>
            </div>
        </span>
        <form className={styles.yourComment}>
            <img src="https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"
                 alt="you"/>
            <div className={styles.textAreaContainer}>
                <textarea id='commentTextArea' onInput={textAreaResizeAndCheckValue}
                          placeholder={t("comment_placeholder")}
                          maxLength={5000}/>
                <button id='submitButton' type={"submit"} className={styles.isNotActive}>{t("comment_button")}</button>
            </div>

        </form>
        <p className={styles.commentsDisclaimer}>{t("comments_moderation")}</p>
        <div className={styles.allComments}>
            {allComments.map(c =>
                <CommentComponent comment={c}/>
            )}
        </div>
    </div>
}

export default CommentsComponent

