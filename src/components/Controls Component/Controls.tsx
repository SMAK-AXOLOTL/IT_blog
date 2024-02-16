import React from "react";
import styles from "./Controls.module.css"

const ControlsComponent: React.FC = () => {
    return <div className={styles.controls + " ControlsComponent"}>
        <div className={styles.controlButtons}>
            <button>Like</button>
            <button>Comment</button>
            <button>Save</button>
            <button>Share</button>
        </div>
    </div>
}

export default ControlsComponent

