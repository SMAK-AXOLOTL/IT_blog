import React from "react";
import styles from "./Comment.module.css"
import {CommentType} from "../../../dataMocks/Types";
import ReplyComponent from "./Reply Component/Reply";

type PropsType = {
    comment: CommentType
}
const CommentComponent: React.FC<PropsType> = ({comment}) => {

    return <div key={comment.id.toString()} id={comment.id.toString()} className={styles.comment}>
        <img src={"https://static.printler.com/cache/0/8/1/1/8/c/08118cb095d702b52289a030f9ba1188e345c33b.jpg"}
             alt={comment.authorName.toString()} className={styles.authorPhoto}/>
        <div className={styles.commentContainer}>
            <div className={styles.avaText}>
                <div className={styles.authorName}>{comment.authorName}</div>
                <div className={styles.commentText}>{comment.commentText}</div>
            </div>
            <div className={styles.ratingControl}>
                <button>Reply</button>
                <button>Like</button>
                <div className={styles.rating}>{comment.rating}</div>
                <button>Dislike</button>
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

