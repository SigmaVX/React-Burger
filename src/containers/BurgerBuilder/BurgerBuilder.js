import React, {Component} from "react";
import Burger from "../../components/Burger/Burger"
import BurgerControls from "../../components/Burger/BuildControls/BuildControls"

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        }
    }



    render(){
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls/>
            
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;