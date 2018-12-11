import React from "react";
import style from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () =>{
    return(
        <header className={style.Toolbar}>
            <div className={style.LogoWrap}><Logo/></div>
            <nav className={style.DesktopHide}><NavigationItems/></nav>
        </header>
    );
}

export default Toolbar;