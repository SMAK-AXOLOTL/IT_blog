import React from "react";
import styles from "./Content.module.css"
import contentPlaceholder from "./ContentPlaceholder"
//TODO: actual content
const ContentComponent: React.FC = () => {
    return <div className={styles.Content + " ContentComponent"}>
        {contentPlaceholder}
    </div>
}

export default ContentComponent

