import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import '../css/cart.css'

export default class TakeMoney extends React.Component {
	onToken = token => {
		fetch('https://tagshop.co/api/stripe/charge', {
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

	render() {
		return (
			<StripeCheckout
				className="abs-center mb4"
				token={this.onToken}
				stripeKey="pk_test_Y5Lkct1A02lur9dTdDamOpzB"
				name="TAGSHOP, LLC" // the pop-in header title
				image="http://tagshop.co/assets/media/brand250.png"
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
