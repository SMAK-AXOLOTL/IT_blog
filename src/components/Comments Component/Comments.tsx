import React, {useEffect, useRef, useState} from "react";
import styles from "./Comments.module.css"
import CommentComponent from "./CommentComponent/Comment";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../hooks/hooks";
import {addComment, selectAllComments} from "../../redux/slices/comments/CommentsSlice";
import {selectUserName} from "../../redux/slices/user/UserSlice";
import {selectAuthorInfo} from "../../redux/slices/author/AuthorSlice";

const CommentsComponent: React.FC = () => {
    const {t} = useTranslation()

    const author = useSelector(selectAuthorInfo)
    const userName = useSelector(selectUserName)
    const comments = useSelector(selectAllComments)

    const dispatch = useAppDispatch()

    const [yourCommentText, setYourCommentText] = useState('')

    let textAreaEl:any = useRef(null)
    let formButton:any = useRef(null)

    useEffect(() => {
        textAreaEl.current = document.getElementById("commentTextArea")
        formButton.current = document.getElementById("submitButton")
    }, [])

    function handleOnChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setYourCommentText(event.currentTarget.value)
    }

    function handleSubmit () {
        dispatch(addComment({yourCommentText, userName}))
        alert("jopa")
    }
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
                 src={author.authorImg}
                 alt="post author"/>
            <div>
                <p className={styles.authorName}>{author.authorName}</p>
                <p className={styles.authorMessage}>{author.engagementBait}</p>
            </div>
        </span>
        <form className={styles.yourComment} onSubmit={handleSubmit}>
            <div>
                <img src="https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"
                     alt="you"/>
            </div>
            <div className={styles.textAreaContainer}>
                <textarea id='commentTextArea' onInput={textAreaResizeAndCheckValue}
                          placeholder={t("comment_placeholder")}
                          value={yourCommentText}
                          onChange={handleOnChange}
                          maxLength={5000}/>
                <button id='submitButton' type={"submit"} className={styles.isNotActive}>{t("comment_button")}</button>
            </div>
        </form>
        <p className={styles.commentsDisclaimer}>{t("comments_moderation")}</p>
        <div className={styles.allComments}>
            {comments.map(c =>
                <CommentComponent id={c.id}/>
            )}
        </div>
    </div>
}

export default CommentsComponent

