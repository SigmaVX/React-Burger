import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";
import style from "./ContactData.module.css";

class ContactData extends Component{
    
    state={
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""

        }
    }

    orderHandler = (event) =>{
        event.preventDefault();
        console.log('Contact Data Props: ', this.props.ingredients);
    }

    render(){
        return(
            <div className={style.ContactData}>
                <h4>Enter Contact Data</h4>
                <form>
                    <input className={style.Input} type="text" name="name" placeholder="Name"/>
                    <input className={style.Input} type="email" name="email" placeholder="Email"/>
                    <input className={style.Input} type="text" name="street" placeholder="Street"/>
                    <input className={style.Input}  type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>


            </div>
        );
    }
}

export default ContactData;