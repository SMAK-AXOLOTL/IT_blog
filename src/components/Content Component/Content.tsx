import React from "react";
import styles from "./Content.module.css"
import CommentsComponent from "../Comments Component/Comments";
import ControlsComponent from "../Controls Component/Controls";
import {formatDate} from "../../Utils/utilFunctions";
import {useSelector} from "react-redux";
import {selectPostInfo} from "../../redux/slices/post/PostSlice";
import {selectAuthorInfo} from "../../redux/slices/author/AuthorSlice";

const ContentComponent: React.FC = () => {
    const post = useSelector(selectPostInfo)
    const author = useSelector(selectAuthorInfo)

    return <div className={styles.Content + " ContentComponent"}>
        <div className={styles.ContentPlaceholder}>
            <span>{formatDate(post.postTime)} 👁{post.postViews}</span>
            <span className={styles.articleAuthorInfo}>
                <img src={author.authorImg} alt={author.authorName}/>
                <div>
                    <div>{author.authorName}</div>
                    <div>{author.authorStatus}</div>
                </div>
            </span>
            {post.post}
        </div>
        <ControlsComponent/>
        <CommentsComponent/>
    </div>
}

export default ContentComponent

