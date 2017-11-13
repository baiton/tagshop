import history from '../history'
import Item from '../components/_Item'
import TakeMoney from '../components/_Stripe_Checkout'
const React = require('react')
const { Link } = require('react-router-dom')
const { List, ListItem, Button, TextField } = require('t63')
const { connect } = require('react-redux')
const { SET_CART } = require('../constants')
const { getUser } = require('../db.js')
const { map, pathOr, compose, assoc } = require('ramda')

class Cart extends React.Component {
	componentDidMount() {}

	render() {
		const props = this.props
		return (
			<div className="avenir">
				<div className="flex justify-between">
					<div>
						<button
							className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue"
							onClick={props.handleBack}
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
							<button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
								Home
							</button>
						</Link>
					</div>
				</div>
				<section className="flex justify-center">
					<h2>Your Cart</h2>
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
				doDispatch('SET_CART', null, name)
			}
		},
		handleBack: e => history.goBack()
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
