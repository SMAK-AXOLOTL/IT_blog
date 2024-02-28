import React from "react";
import styles from "./Controls.module.css"

const ControlsComponent: React.FC = () => {
    return <div className={styles.controls + " ControlsComponent"}>
        <div className={styles.controlButtons}>
            <div className={styles.controlsLeft}>
                <button>👍</button>
                <button>🔖</button>
            </div>
            <div className={styles.controlsRight}>
                <button>🖅</button>
            </div>
        </div>
    </div>
}

export default ControlsComponent

