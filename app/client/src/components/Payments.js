import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Payments extends Component {
    render(){
        return(
            <StripeCheckout 
            name="Yumify"
            description="Ready for your meal?"    
            amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Make Payment
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);