import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import style from "./Layout.module.css";

const layout = (props) => {
    return(
        <React.Fragment>
            <SideDrawer/>
            <Toolbar></Toolbar>
            <main className={style.main}>{props.children}</main>
        </React.Fragment>
    )
}

export default layout;