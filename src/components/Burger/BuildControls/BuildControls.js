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
            <h4>Total Price: ${props.price.toFixed(2)}</h4>
            {controls.map(item=>(
                <BuildControl 
                    lable={item.lable} 
                    key={item.lable}
                    addItem={()=>props.addIngredients(item.type)}
                    removeItem={()=>props.removeIngredients(item.type)}
                    disabled={props.disabledItems[item.type]}
                />
            ))}
            <button 
                disabled={!props.canBuy}
                className={style.OrderButton}
                onClick={props.orderClicked}
            >
                Order Now
            </button>
        </div>

    );
}

export default BuildControls;