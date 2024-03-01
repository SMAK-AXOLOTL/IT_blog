import React from "react";
import styles from "./SignedImage.module.css"

type PropsType = {
    imgSrc: string,
    imgSign?: string
}

const SignedImageComponent: React.FC<PropsType> = ({imgSrc, imgSign}) => {

    return <div className={styles.signedImageWrapper}>
        <img className={styles.signedImage} src={imgSrc} alt={imgSign}/>
        <p className={styles.imageSign}>{imgSign}</p>
    </div>
}

export default SignedImageComponent

