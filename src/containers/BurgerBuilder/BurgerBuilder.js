import React, {Component} from "react";
import Burger from "../../components/Burger/Burger"
import BurgerControls from "../../components/Burger/BuildControls/BuildControls"

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        unitPrice: {
            salad: 0.35,
            bacon: 0.75,
            cheese: 0.5,
            meat: 1.5
        },
        totalOrderPrice: 4
    }

    addIngredients = (type) =>{
        let oldCount = this.state.ingredients[type];
        let newCount = oldCount + 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type]=newCount;

        let oldPrice = this.state.totalOrderPrice;
        let newPrice = oldPrice + this.state.unitPrice[type];
        
        this.setState({ingredients: newIngredients, totalOrderPrice: newPrice})
        console.log({newIngredients, newPrice}); 
    }

    removeIngredients = (type) =>{
        let oldCount = this.state.ingredients[type];
        if(oldCount ===0){return;}
        let newCount = oldCount - 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type]=newCount;

        let oldPrice = this.state.totalOrderPrice;
        let newPrice = oldPrice - this.state.unitPrice[type];
        
        this.setState({ingredients: newIngredients, totalOrderPrice: newPrice})
        console.log({newIngredients, newPrice}); 
    }


    render(){

        // Make an object listing items that should be disabled
        let disabledItems = {...this.state.ingredients};
        for(let key in disabledItems){
            if(disabledItems[key]===0){
                disabledItems[key] = true;
            } else {
                disabledItems[key] = false;
            }
        }
        console.log(disabledItems);

        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addIngredients={this.addIngredients}
                    removeIngredients={this.removeIngredients}
                    disabledItems={disabledItems}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;