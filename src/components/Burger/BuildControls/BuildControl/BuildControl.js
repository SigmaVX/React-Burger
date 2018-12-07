import React from "react";
import style from "./BuildControl.module.css"

const BuildControl = (props) =>{
    return(
        <div className={style.BuildControl}>
            <p className={style.Lable}>{props.lable}</p>
            <button className={style.Less}>Less</button>
            <button className={style.More}>More</button>
        </div>

    );
}

export default BuildControl;