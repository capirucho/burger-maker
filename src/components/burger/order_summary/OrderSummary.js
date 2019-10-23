import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../ui/button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
                </li>);       
        });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Bam!! Here is your burger:</p>
            <ul>
                    {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price}</strong></p>
            <p>Contine to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueWithOrder}>CONTINUE</Button>
        </Aux>
    );

};

export default orderSummary;