import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import '../css/cart.css'

export default class TakeMoney extends React.Component {
	onToken = token => {
		fetch('http://localhost:4000/cities', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(token)
		}).then(response => {
			response.json().then(data => {
				alert(`We are in business ${data.email}!`)
			})
		})
	}

	// ...

	render() {
		return (
			// ...
			//<div id="abs-center">
			<StripeCheckout
				className="abs-center"
				token={this.onToken}
				stripeKey="pk_test_Y5Lkct1A02lur9dTdDamOpzB"
				name="TAGSHOP, LLC" // the pop-in header title
				image="https://fillmurray.com/300/300"
				panelLabel="Pay" // prepended to the amount in the bottom pay button
				amount={1000} // cents
				currency="USD"
				// shippingAddress={true}
				// bitcoin={true}
			/>
			//</div>
		)
	}
}
