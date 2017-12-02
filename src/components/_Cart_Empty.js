import React from 'react'
import { RaisedButton } from 'material-ui'
import CartHeader from './_Cart_Header'
import history from '../history'

class CartEmpty extends React.Component {
	componentDidMount() {
		this.setState({ menuOpen: false })
	}

	handleToggle = () => this.setState({ menuOpen: true })

	render() {
		return (
			<div className="oswald">
				<CartHeader />
				<section className="input-container">
					<h2 className="flex justify-center ts-title">
						YOU HAVE NOTHING IN YOUR CART. <br /> ADD ITEMS AND THEN COME BACK.
					</h2>
				</section>
				<div style={{ textAlign: 'center' }}>
					<RaisedButton
						labelStyle={{ color: 'white' }}
						label="Back to Shopping"
						backgroundColor="DeepPink"
						onClick={e => history.goBack()}
					/>
				</div>
			</div>
		)
	}
}

export default CartEmpty
