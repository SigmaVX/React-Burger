import React from "react";
import style from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) =>{

    let modalClass;
    if (props.showModal){
        modalClass=`${style.Modal} ${style.show}` 
    } else {
        modalClass=`${style.Modal} ${style.hide}`
    }

    return(
        <React.Fragment>
            <Backdrop show={props.showModal} clicked={props.closeModal}/>
            <div className={modalClass}>
                {props.children}
            </div>
        </React.Fragment>
    ); 
};

export default Modal;