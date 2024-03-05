import React, {Dispatch} from "react";
import styles from "./Header.module.css"
import ProfileBarComponent from "./Profile Bar Component/ProfileBar";
import HeaderNavElemsComponent from "./Header Nav Elements Components/HeaderNavElems";

type PropsType = {
    setOpen: Dispatch<any>,
    open: boolean
}

const HeaderComponent: React.FC<PropsType> = ({setOpen,open}) => {

    return <div className={styles.Header + " HeaderComponent"}>
        <HeaderNavElemsComponent open={open} setOpen={setOpen}/>
        <ProfileBarComponent/>
    </div>
}

export default HeaderComponent

