import React from "react";
import style from "./BuildControl.module.css";


const BuildControl = (props) =>{
    return(
        <div className={style.BuildControl}>
            <button className={style.Less} onClick={props.removeItem} disabled={props.disabled}>
               <i className="fas fa-minus-circle"></i>
            </button>

            <div className={style.Label}>{props.lable}</div>  
            
            <div className={style.More} onClick={props.addItem} >
                <i className="fas fa-plus-circle"></i>
            </div>  
        </div>

    );
}

export default BuildControl;