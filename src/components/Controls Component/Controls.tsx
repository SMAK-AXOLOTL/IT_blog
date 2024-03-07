import React from "react";
import styles from "./Controls.module.css"
import {useSelector} from "react-redux";
import {changePostRating, selectPostInfo} from "../../redux/slices/post/PostSlice";
import {useAppDispatch} from "../../hooks/hooks";

const ControlsComponent: React.FC = () => {
    const post = useSelector(selectPostInfo)
    const dispatch = useAppDispatch()

    return <div className={styles.controls + " ControlsComponent"}>
        <div className={styles.controlButtons}>
            <div className={styles.controlsLeft}>
                <span>{post.postRating}</span>
                <button onClick={() => dispatch(changePostRating(1))}>👍</button>
                <button>🔖</button>
            </div>
            <div className={styles.controlsRight}>
                <button>🖅</button>
            </div>
        </div>
    </div>
}

export default ControlsComponent

