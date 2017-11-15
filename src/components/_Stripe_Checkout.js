import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { map, propOr, reduce } from 'ramda'
import '../css/cart.css'
import history from '../history'
const { connect } = require('react-redux')

class TakeMoney extends React.Component {
	onToken = token => {
		fetch('https://tagshop.co/api/stripe/charge', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(token)
		}).then(response => {
			response.json().then(data => {
				if (
					alert(
						`Thanks for your purchase! Check your e-mail for shipping details.`
					)
				) {
					history.replace('/')
				}
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
				image="http://tagshop.co/assets/media/favico_152.png"
				panelLabel="Pay" // prepended to the amount in the bottom pay button
				amount={Number(this.props.totalPrice) * 100} // cents
				currency="USD"
				shippingAddress={true}
			/>
			//</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		cart: state.cart,
		totalPrice: reduce(
			(a, v) => Number(a) + Number(v),
			0,
			map(x => propOr('', 'price', x), state.cart)
		)
	}
}

const connector = connect(mapStateToProps)

export default connector(TakeMoney)
