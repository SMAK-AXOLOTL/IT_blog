import React from "react";
import styles from "./Ad.module.css"

const AdComponent: React.FC = () => {
    return <div className={styles.Ad + " AdComponent"}>
            <h1>Только сегодня! Купите нашу штуку и получите вторую в подарок!</h1>
        </div>
}

export default AdComponent

