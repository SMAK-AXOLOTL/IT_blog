import React from "react";
import styles from "./Reply.module.css"
import {ReplyType} from "../../../../dataMocks/Types";

type PropsType = {
    reply: ReplyType
}
//TODO play around with reply's padding, reply date&time
const ReplyComponent: React.FC<PropsType> = ({reply}) => {

    return <div key={reply.id.toString()} id={reply.id.toString()} className={styles.reply}>
        <img src={"https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"} alt={reply.author.toString()} className={styles.authorPhoto}/>
        <div className={styles.replyContainer}>
            <div className={styles.replyAvaText}>

                <div className={styles.authorReplyText}>
                    <div className={styles.replyAuthorName}>{reply.author}</div>
                    <div className={styles.replyText}>{reply.replyText}</div>
                </div>
            </div>
            <div className={styles.ratingControl}>
                <button>Like</button>
                <div className={styles.rating}>{reply.replyRating}</div>
                <button>Dislike</button>
            </div>
        </div>
    </div>
}

export default ReplyComponent

