import React from "react";
import styles from "./Reply.module.css"
import {ReplyType} from "../../../../dataMocks/Types";
import {formatDate, paddedString} from "../../../../Utils/utilFunctions";
import {useTranslation} from "react-i18next";

type PropsType = {
    reply: ReplyType
}

const ReplyComponent: React.FC<PropsType> = ({reply}) => {
    const {t} = useTranslation()

    return <div key={reply.id.toString()} id={reply.id.toString()} className={styles.reply}>
        <img src={"https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"} alt={reply.replyAuthor.toString()} className={styles.authorPhoto}/>
        <div className={styles.replyContainer}>
            <div className={styles.replyAvaText}>
                <div className={styles.authorReplyText}>
                    <div className={styles.replyAuthorNameDateTime}>
                        <div className={styles.replyAuthorName}>{paddedString(reply.replyAuthor, 3)}</div>
                        <div className={styles.replyDateTime}>{formatDate(reply.replyDateTime)}</div>
                    </div>
                    <div className={styles.replyText}>{reply.replyText}</div>
                </div>
            </div>
            <div className={styles.ratingControl}>
                <button className={styles.replyButton}>{t("reply_button")}</button>
                <button>🖒</button>
                <div className={styles.rating}>{reply.replyRating}</div>
                <button>🖓</button>
            </div>
        </div>
    </div>
}

export default ReplyComponent

