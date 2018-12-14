import React, {Component} from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"; 
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../API/Axios/Axios-Orders";
import ErrorHandler from "../ErrorHandler/ErrorHandler";


class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        unitPrice: {
            salad: 0.35,
            bacon: 0.75,
            cheese: 0.5,
            meat: 1.5
        },
        totalOrderPrice: 4,
        canPurchase: false,
        showModal: false,
        loading: false
    }

    componentDidMount(){
        axios.get("/ingredients.json")
            .then(response=>{
                this.setState({ingredients: response.data})
            })
            .catch(error=>{console.log(error)})
    }

    updatePurchaseState = (ingredients) =>{
        // Make an Array Of Object's Key Names
        const ingNames = Object.keys(ingredients);
        // Make an Array Of Object's Values
        const ingValues = ingNames.map(item=>{ return ingredients[item]})
        const sum = ingValues.reduce((sum, current)=>{
            return sum + current;
        }, 0);
        // Set State Based On If Sum Is > 0
        this.setState({canPurchase: sum>0});
        // Some Logs
        // console.log(ingNames);
        // console.log(ingValues);
        // console.log("Total Items: ", sum);
    }


    addIngredients = (type) =>{
        let oldCount = this.state.ingredients[type];
        let newCount = oldCount + 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type]=newCount;

        let oldPrice = this.state.totalOrderPrice;
        let newPrice = oldPrice + this.state.unitPrice[type];
        
        this.setState({ingredients: newIngredients, totalOrderPrice: newPrice});
        this.updatePurchaseState(newIngredients);
        // console.log({newIngredients, newPrice}); 
    }

    removeIngredients = (type) =>{
        let oldCount = this.state.ingredients[type];
        if(oldCount ===0){return;}
        let newCount = oldCount - 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type]=newCount;

        let oldPrice = this.state.totalOrderPrice;
        let newPrice = oldPrice - this.state.unitPrice[type];
        
        this.setState({ingredients: newIngredients, totalOrderPrice: newPrice});
        this.updatePurchaseState(newIngredients);
        console.log({newIngredients, newPrice}); 
    }

    showModal = () =>{
        this.setState({showModal: true});
    }

    closeModal = () =>{
        this.setState({showModal: false});
        console.log(this.state.showModal);
    }

    purchaseBurger = () =>{
        this.setState({loading: true})
        
        let order = {
            ingredients: this.state.ingredients,
            orderPrice: this.state.price,
            customer: {
                name: "Tony",
                address: {
                    street: "123 Street",
                    zipCode: "12345",
                    country: "USA"
                },
                email: "123@123.com"
            },
            deliveryMethod: "fastest"
        }

        axios.post("/orders.n", order)
            .then(data =>{
                this.setState({
                    loading: false,
                    showModal: false
                });
                console.log(data)
            })
            .catch(error =>{
                this.setState({
                    loading: false,
                    showModal: false
                });
                console.log(error)
            });

        // alert("Burger Ordered!")
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
        // console.log(disabledItems);

        // Conditional For Spinner and Order Summary
        let orderSummary = null;
        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        // Conditional Spinner For Burger While Loading From State
        let burger = <Spinner/>;
        if(this.state.ingredients){    
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients}/>
                    <BurgerControls
                        addIngredients={this.addIngredients}
                        removeIngredients={this.removeIngredients}
                        disabledItems={disabledItems}
                        price={this.state.totalOrderPrice}
                        canBuy={this.state.canPurchase}
                        orderClicked={this.showModal}
                    />
                </React.Fragment>
            );
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients} 
                closeModal={this.closeModal}
                purchaseBurger={this.purchaseBurger}
                totalPrice={this.state.totalOrderPrice}
            />
        }
        

        return(
            <React.Fragment>
                <Modal showModal={this.state.showModal} closeModal={this.closeModal}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

export default ErrorHandler(BurgerBuilder, axios);