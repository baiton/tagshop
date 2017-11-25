import Item from '../components/_Item'
import TakeMoney from '../components/_Stripe_Checkout'
import history from '../history'
const React = require('react')
const { Link } = require('react-router-dom')
const { connect } = require('react-redux')
const { SET_CART } = require('../constants')
const { map, compose, assoc } = require('ramda')

class Cart extends React.Component {
	render() {
		const props = this.props
		return (
			<div>
				{!(props.cart <= []) && (
					<div className="oswald">
						<div className="flex justify-between">
							<div>
								<button
									className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2"
									onClick={e => history.goBack()}
								>
									Back
								</button>
							</div>
							<img
								id="logo"
								src="http://tagshop.co/assets/media/brand250.png"
								alt="TagShop"
							/>
							<div>
								<Link to="/">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Home
									</button>
								</Link>
							</div>
						</div>
						<section className="flex justify-center">
							<h2 className="ts-title" style={{ textTransform: 'uppercase' }}>
								Your Cart
							</h2>
						</section>
						<div className="card-wrapper">
							{compose(
								map(Item),
								map(assoc('dispatch', props.dispatch)),
								map(assoc('array', props))
							)(props.cart)}
						</div>
						<TakeMoney />
					</div>
				)}
				{props.cart <= [] && (
					<div className="oswald">
						<div className="flex justify-between">
							<div>
								<button
									className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2"
									onClick={e => history.goBack()}
								>
									Back
								</button>
							</div>
							<img
								id="logo"
								src="http://tagshop.co/assets/media/brand250.png"
								alt="TagShop"
							/>
							<div>
								<Link to="/">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Home
									</button>
								</Link>
							</div>
						</div>
						<section className="input-container">
							<h2 className="flex justify-center ts-title">
								YOU HAVE NOTHING IN YOUR CART <br /> ADD ITEMS AND THEN COME
								BACK.
							</h2>
						</section>
					</div>
				)}
			</div>
		)
	}
}

function mapActionsToProps(dispatch) {
	const doDispatch = (type, field, value) => {
		dispatch({
			type: type + field,
			payload: value
		})
	}
	return {
		dispatch,
		handleUser: name => {
			return e => {
				doDispatch(SET_CART, null, name)
			}
		}
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		cart: state.cart
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Cart)
