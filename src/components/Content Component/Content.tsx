import React from "react";
import styles from "./Content.module.css"
import CommentsComponent from "../Comments Component/Comments";
import ControlsComponent from "../Controls Component/Controls";

import {PostData} from "../../dataMocks/PostData";
import {formatDate} from "../../Utils/utilFunctions";

const ContentComponent: React.FC = () => {
    const post = PostData

    return <div className={styles.Content + " ContentComponent"}>
        <div className={styles.ContentPlaceholder}>
            <span>{formatDate(post.postTime)} 👁{post.postViews}</span>
            <span className={styles.articleAuthorInfo}>
                <img src={post.postAuthor.authorImg} alt={post.postAuthor.authorName}/>
                <div>
                    <div>{post.postAuthor.authorName}</div>
                    <div>{post.postAuthor.authorStatus}</div>
                </div>
            </span>
            {post.post}
        </div>
        <ControlsComponent/>
        <CommentsComponent authorInfo={post.postAuthor} allComments={post.commentsData}/>
    </div>
}

export default ContentComponent

