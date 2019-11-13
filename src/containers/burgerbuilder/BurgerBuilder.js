import React, { Component } from 'react';
import Aux from '../../hoc/aux/Aux';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/build_controls/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/order_summary/OrderSummary';
import Spinner from '../../components/ui/spinner/Spinner';
import withErrorHandler from '../../hoc/with_error_handler/WithErrorHandler';

import axios from '../../axios-orders';

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
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        orderStatus: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-burger-builder-f68f8.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
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
        //alert('Continue with Order');
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            // in prod app price should be calculated on server to avoid
            // possible user tampering via client.
            // for testing this is ok
            price: this.state.totalPrice,
            customer: {
                name: 'Capirucho',
                address: {
                    street: 'Somestreet Name',
                    zipCode: '12345',
                    country: 'USA'
                },
                emailAddress: 'username@domain.com'
            },
            deliveryMethod: 'Speedy'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, orderStatus: false});
            })
            .catch(error => {
                this.setState({loading: false, orderStatus: false});
            });
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummary = null;

        let burger = this.state.error ? <p Style="Color:red;Text-Align:center;Padding:15px;">
            ...Error loading ingredients</p> : <Spinner />;

        if(this.state.ingredients) {
            burger = (
                <Aux>
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
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients} 
                price={this.state.totalPrice.toFixed(2)} 
                cancelOrder={this.cancelOrderHandler} 
                continueWithOrder={this.orderContinueHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.orderStatus} hideModal={this.cancelOrderHandler} >
                    {orderSummary}
                </Modal>
                {burger}    
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);