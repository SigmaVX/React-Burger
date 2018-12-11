import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import style from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    // checks
    return(
        <React.Fragment>
            <Backdrop show/>
            <div className={style.SideDrawer}>
                <div className={style.LogoWrap}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default SideDrawer;