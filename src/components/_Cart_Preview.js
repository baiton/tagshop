import React from 'react'
import { Popover, Menu, MenuItem } from 'material-ui'
const { connect } = require('react-redux')
const { map, pathOr, length, assoc } = require('ramda')
const { CLEAR_CART } = require('../constants')

function cartCards(cart) {
	return (
		<MenuItem
			style={{
				height: '55px',
				backgroundColor: 'white'
			}}
			key={cart.media_id}
			primaryText={'$' + pathOr('0', ['price'], cart)}
			leftIcon={
				<img
					className="br-100"
					src={pathOr('No Items in Cart', ['images'], cart)}
					alt="product"
					style={{
						height: '40px',
						width: '40px',
						verticalAlign: 'middle'
					}}
				/>
			}
			rightIcon={
				<button
					style={{
						color: '#D7D9D0',
						borderRadius: '100%',
						borderWidth: '0px',
						backgroundColor: 'white'
					}}
					onClick={e =>
						cart.dispatch({
							type: CLEAR_CART,
							payload: { cartObj: cart, id: cart.media_id }
						})
					}
				>
					x
				</button>
			}
		/>
	)
}

function totalPrice(cart) {
	let price = 0
	for (var cartLength = length(cart); cartLength !== 0; cartLength--) {
		price += parseFloat(cart[cartLength - 1].price)
	}
	return '$' + price
}

class CartPreview extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			targetOrigin: {
				horizontal: 'left',
				vertical: 'top'
			}
		}
	}
	handleTouchTap = e => {
		e.preventDefault()

		this.setState({
			open: true,
			anchorEl: e.currentTarget
		})
	}

	handleRequestClose = () => {
		this.setState({
			open: false
		})
	}

	render() {
		return (
			<div>
				<i
					className="material-icons"
					onClick={this.handleTouchTap}
					style={{ fontSize: '3rem', cursor: 'pointer', color: 'white' }}
				>
					shopping_cart
				</i>
				<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
					targetOrigin={{ horizontal: 'left', vertical: 'top' }}
					onRequestClose={this.handleRequestClose}
					animation={Popover.PopoverAnimationVertical}
				>
					{length(this.props.cart) > 0 && (
						<Menu maxHeight={175} style={{ backgroundColor: 'DeepPink' }}>
							<MenuItem
								leftIcon={
									<i className="material-icons" style={{ color: 'white' }}>
										shopping_cart
									</i>
								}
								style={{
									backgroundColor: 'DeepPink',
									color: 'white'
								}}
								primaryText={`${totalPrice(this.props.cart)}`}
							/>
							{map(
								cartCards,
								map(assoc('cart', this.props.cart), this.props.cart)
							)}
						</Menu>
					)}
					{!length(this.props.cart) > 0 && (
						<Menu maxHeight={175} style={{ backgroundColor: 'DeepPink' }}>
							<MenuItem
								leftIcon={
									<i className="material-icons" style={{ color: 'white' }}>
										shopping_cart
									</i>
								}
								style={{
									backgroundColor: 'DeepPink',
									color: 'white'
								}}
								primaryText="No Items in cart"
							/>
						</Menu>
					)}
				</Popover>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const connector = connect(mapStateToProps)

export default connector(CartPreview)
