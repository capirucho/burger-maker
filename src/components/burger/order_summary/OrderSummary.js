import React, {Component} from 'react';
import Aux from '../../../hoc/aux/Aux';
import Button from '../../ui/button/Button';

class OrderSummary extends Component {
    // This could be a functional component, does not
    // have to be a class
    componentDidUpdate() {
        console.log('[OrderSummary] DidUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
                </li>);       
        });


        return (        
            <Aux>
                <h3>Your Order</h3>
                <p>Bam!! Here is your burger:</p>
                <ul>
                        {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price}</strong></p>
                <p>Contine to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continueWithOrder}>CONTINUE</Button>
            </Aux>
        );
    }
}
export default OrderSummary;