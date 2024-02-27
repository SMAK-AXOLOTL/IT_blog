import React from "react";
import styles from "./Controls.module.css"

//TODO: change buttons to icons
const ControlsComponent: React.FC = () => {
    return <div className={styles.controls + " ControlsComponent"}>
        <div className={styles.controlButtons}>
            <div className={styles.controlsLeft}>
                <button>Like</button>
                <button>Save</button>
            </div>
            <div className={styles.controlsRight}>
                <button>Share</button>
            </div>
        </div>
    </div>
}

export default ControlsComponent

