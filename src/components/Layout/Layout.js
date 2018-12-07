import React from "react";
import style from "./Layout.module.css";

const layout = (props) => {
    return(
        <React.Fragment>
            <div>
                need toolbar, drawer, and backdrop
            </div>

            <main className={style.main}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default layout;