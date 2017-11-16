import '../css/userstore.css'
import Product_Card from '../components/_Product_Card.js'
import history from '../history'
const loading = require('../images/loading.svg')
const React = require('react')
const { Link } = require('react-router-dom')
const { connect } = require('react-redux')
const { getUser } = require('../db.js')
const { map, pathOr, assoc, compose, is } = require('ramda')
const { SET_VERIFY, SET_BUTTONS, CLEAR_BUTTONS } = require('../constants')

class UserStore extends React.Component {
	componentDidMount() {
		this.props.dispatch(getUser(this.props.match.params.username))
		this.props.dispatch({
			type: SET_VERIFY
		})
	}

	render() {
		const props = this.props
		const userName = props.match.params.username
		return (
			<div>
				{pathOr(null, ['user', 'user', 'media'], props) &&
				!is(String, props.user.user.media) && (
					<div className="avenir">
						<div className="flex justify-between">
							<Link to="/">
								<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
									Home
								</button>
							</Link>
							<img
								id="logo"
								src="http://tagshop.co/assets/media/brand250.png"
								alt="TagShop"
							/>
							<Link to="/cart">
								<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
									Cart
								</button>
							</Link>
						</div>
						<section className="wrapper" />
						<div className="card-wrapper">
							{compose(
								map(Product_Card),
								map(assoc('cart', this.props.cart)),
								map(assoc('dispatch', this.props.dispatch)),
								map(assoc('handleCart', this.props.handleCart))
							)(pathOr([], ['user', 'user', 'media'], props))}
						</div>
					</div>
				)}
				{pathOr(null, ['user', 'user', 'loginUrl'], props) &&
				props.buttons === true && (
					<div>
						<div className="flex fustify-around mp3 pv2">
							<div>
								<Link to="/">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Home
									</button>
								</Link>
							</div>
							<div className="center">
								<img
									id="logo"
									src="http://tagshop.co/assets/media/brand250.png"
									alt="TagShop"
								/>
							</div>
							<div>
								<Link to="/cart">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Cart
									</button>
								</Link>
							</div>
						</div>
						<div className="flex justify-center">
							<h4 className="oswald">Is this your account?</h4>
							<div>
								<button
									className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma1"
									onClick={e => history.replace(`${userName}/verify`)}
								>
									Yes
								</button>
							</div>
							<div>
								<button
									className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma1"
									onClick={e =>
										props.dispatch({
											type: CLEAR_BUTTONS
										})}
								>
									No
								</button>
							</div>
						</div>
						<h2 className="tc st-noTagsflex flex-column items-center">
							There are No tagged posts for this account yet.<br />Tag them with
							#Tagshop and $(amount)
						</h2>
					</div>
				)}
				{props.buttons === false && (
					<div>
						<div className="flex fustify-around mp3 pv2">
							<div>
								<Link to="/">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Home
									</button>
								</Link>
							</div>
							<div className="center">
								<img
									id="logo"
									src="http://tagshop.co/assets/media/brand250.png"
									alt="TagShop"
								/>
							</div>
							<div>
								<Link to="/cart">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Cart
									</button>
								</Link>
							</div>
						</div>
						<h2 className="tc st-noTagsflex flex-column items-center">
							There are No tagged posts for this account yet.<br />Tag them with
							#Tagshop and $(amount)
						</h2>
					</div>
				)}
				{is(String, pathOr(null, ['user', 'user', 'media'], props)) && (
					<div>
						<div className="flex fustify-around mp3 pv2">
							<div>
								<Link to="/">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Home
									</button>
								</Link>
							</div>
							<div className="center">
								<img
									id="logo"
									src="http://tagshop.co/assets/media/brand250.png"
									alt="TagShop"
								/>
							</div>
							<div>
								<Link to="/cart">
									<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma2">
										Cart
									</button>
								</Link>
							</div>
						</div>
						<h1 className="tc st-noTagsflex flex-column items-center">
							You have not tagged any posts yet.<br />Tag them with #Tagshop and
							$(amount)
						</h1>
					</div>
				)}
				{!pathOr('', ['user'], props.user) && (
					<div id="custom-loader-container">
						<img id="custom-loader" src={loading} alt="loading" />
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
				doDispatch('SET_USER', null, name)
			}
		},
		handleCart: post => {
			dispatch({
				type: 'SET_CART',
				payload: post
			})
		}
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		cart: state.cart,
		verify: state.verify,
		buttons: state.buttons
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(UserStore)
