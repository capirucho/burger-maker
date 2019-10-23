import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/build_controls/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/order_summary/OrderSummary';

const INGREDIENT_PRICES = {
    lettuce: 0.3,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.5
}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        orderStatus: false
    }

    updatePurchaseState(ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };

        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            })
            .reduce((sum, el) => {
               return sum + el; 
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);      
    }

    orderHandler = () => {
        this.setState({orderStatus: true});
    }

    cancelOrderHandler = () => {
        this.setState({orderStatus: false});
    }

    orderContinueHandler = () => {
        alert('Continue with Order');
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.orderStatus} hideModal={this.cancelOrderHandler} >
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        price={this.state.totalPrice.toFixed(2)} 
                        cancelOrder={this.cancelOrderHandler} 
                        continueWithOrder={this.orderContinueHandler}/>
                </Modal>    
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo} 
                    purchasable={this.state.purchasable} 
                    clickedOrderBtn={this.orderHandler}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;