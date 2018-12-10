import React from "react";
import Button from "../../UI/Button/Button";
import style from "./OrderSummary.module.css";

const OrderSummary = (props) =>{
    const ingredientList = Object.keys(props.ingredients)
        .map(ingredientItem => {
            return  <li className={style.List} key={ingredientItem}>
                        <span style={{textTransform: "capitalize"}}>{ingredientItem}</span> : {props.ingredients[ingredientItem]}
                    </li>
        });

    return(
        <React.Fragment>
            <h2 className={style.Header}>Your Order Summary</h2>
            <p >Thats A Scrumptious Looking Burger!</p>
            <ul>
                {ingredientList}
            </ul>
            <Button clicked={props.purchaseBurger} btnType="Success">Continue To Checkout?</Button>
            <Button clicked={props.closeModal} btnType="Danger">Close</Button>
        </React.Fragment>
    ); 
};

export default OrderSummary;