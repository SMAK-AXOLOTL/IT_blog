import React from "react";
import styles from "./Comment.module.css"
import {CommentType} from "../../../dataMocks/Types";
import ReplyComponent from "./Reply Component/Reply";
import {formatDate, paddedString} from "../../../Utils/utilFunctions";
import {useTranslation} from "react-i18next";

type PropsType = {
    comment: CommentType
}

const CommentComponent: React.FC<PropsType> = ({comment}) => {
    const {t} = useTranslation()

    return <div key={comment.id.toString()} id={comment.id.toString()} className={styles.comment}>
        <img src={"https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"}
             alt={comment.authorName.toString()} className={styles.authorPhoto}/>
        <div className={styles.commentContainer}>
            <div className={styles.avaText}>
                <div className={styles.commentAuthorNameDateTime}>
                    <div className={styles.authorName}>{paddedString(comment.authorName, 3)}</div>
                    <div className={styles.commentDateTime}>{formatDate(comment.commentDateTime)}</div>
                </div>
                <div className={styles.commentText}>{comment.commentText}</div>
            </div>
            <div className={styles.ratingControl}>
                <button className={styles.replyButton}>{t("reply_button")}</button>
                <button>🖒</button>
                <div className={styles.rating}>{comment.rating}</div>
                <button>🖓</button>
            </div>
            <div className={styles.replies}>
                {comment.replies?.map(r =>
                    <ReplyComponent reply={r}/>
                    )
                }
            </div>
        </div>
    </div>
}

export default CommentComponent

