import React from "react";
import style from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) =>{

    let controls = [
        {lable: "Tofu Patty", type:"meat"},
        {lable: "Bacon", type:"bacon"},
        {lable: "Cheese", type:"cheese"},
        {lable: "Lettuce", type:"salad"}
    ];


    return(
        <div className={style.BuildControls}>
            {controls.map(item=>(
                <BuildControl 
                    lable={item.lable} 
                    key={item.lable}
                    addItem={()=>props.addIngredients(item.type)}
                    removeItem={()=>props.removeIngredients(item.type)}
                    disabled={props.disabledItems[item.type]}
                />
            ))}
        </div>

    );
}

export default BuildControls;