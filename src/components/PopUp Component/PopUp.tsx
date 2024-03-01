import React, {useState} from "react";
import ThemeToggler from "../../Utils/UtilComponents/ThemeToggler/ThemeToggler";
import LocaleSwitcher from "../../Utils/UtilComponents/LocaleSwitcher/LocaleSwitcher";
import styles from './PopUp.module.css'

type PropsType = {
    idMessage: string
}

const PopUp: React.FC<PropsType> = ({idMessage}) => {
    const [open, setOpen] = useState(false);

    return (<div className={styles.popUpWrapper}>
                <button
                    onClick={() => setOpen(!open)}
                >
                    ⚒
                </button>
                {open && (
                    <div
                        className={styles.settingsMenu}
                        id={idMessage}
                        tabIndex={-1}
                    >
                        <ThemeToggler/>
                        <LocaleSwitcher/>
                    </div>
                )}
            </div>
    );
};

export default PopUp;