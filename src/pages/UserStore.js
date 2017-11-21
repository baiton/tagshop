import '../css/userstore.css'
import Product_Card from '../components/_Product_Card.js'
import { AppBar, FlatButton } from 'material-ui'
const loading = require('../images/loading.svg')
const React = require('react')
const { Link } = require('react-router-dom')
const { connect } = require('react-redux')
const { getUser } = require('../db.js')
const { map, pathOr, assoc, compose, is, length, toUpper } = require('ramda')
const {
	SET_VERIFY,
	CLEAR_BUTTONS,
	SET_USER,
	SET_CART
} = require('../constants')

class UserStore extends React.Component {
	componentDidMount() {
		this.props.dispatch(getUser(this.props.match.params.username))
		this.props.dispatch({
			type: SET_VERIFY
		})
	}

	render() {
		const props = this.props
		return (
			<div>
				{pathOr(null, ['user', 'user', 'media'], props) &&
				!is(String, props.user.user.media) && (
					<div className="abel">
						<div
							className="tc"
							style={{
								boxShadow: '0px 0px 5px black',
								backgroundColor: 'DeepPink'
							}}
						>
							<AppBar
								title={
									<div>
										<img
											id="logo"
											src={props.user.user.media[0].profile_picture}
											className="br-100 ba white ma2"
											style={{
												height: '50px',
												width: '50px',
												borderWidth: '2px'
											}}
											alt="TagShop"
										/>
									</div>
								}
								style={{
									backgroundColor: 'DeepPink',
									height: '65px'
								}}
								zDepth="0"
							/>
							<h2 className="tc white bg-DeepPink ma0 cubano">
								{toUpper(props.match.params.username)}
							</h2>
							<div className="flex justify-between pr4 pl4 pb3 pt2 white f6">
								<a className="hover-bg-dark-pink br-pill pa2 pointer ba0">
									RECENT
								</a>
								<a className="hover-bg-dark-pink br-pill pa2 pointer">
									POPULAR
								</a>
								<a className="hover-bg-dark-pink br-pill pa2 pointer">
									SOLD OUT
								</a>
							</div>
						</div>
						<section className="wrapper" />
						<div className="card-wrapper">
							{compose(
								map(Product_Card),
								map(assoc('setState', this.setState)),
								map(assoc('removeItem', props.removeItem)),
								map(assoc('addItem', props.addItem)),
								map(assoc('cart', props.cart)),
								map(assoc('dispatch', props.dispatch))
							)(pathOr([], ['user', 'user', 'media'], props))}
						</div>
						<div
							className="tc"
							style={{
								boxShadow: '0px 0px 0px 3px MediumVioletRed',
								backgroundColor: 'DeepPink',
								bottom: '0',
								position: 'fixed',
								right: '0',
								left: '0'
							}}
						>
							<AppBar
								title="#TAGSHOP"
								className="tc"
								iconElementLeft={
									<img
										height="50"
										width="50"
										src="http://stonexindia.net/wp-content/uploads/2017/05/cart_icon_200.png"
										alt="CART"
									/>
								}
								iconElementRight={<FlatButton label="Checkout" />}
								style={{ backgroundColor: 'DeepPink' }}
							/>
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
										{length(props.cart) === 0 && 'Cart'}
										{length(props.cart) > 0 && `Cart (${length(props.cart)})`}
									</button>
								</Link>
							</div>
						</div>
						<div className="flex justify-center">
							<h4 className="oswald">Is this your account?</h4>
							<div>
								<button className="mdc-button mdc-button--raised mdc-card__action ph3 pv2 ma1">
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
										{length(props.cart) === 0 && 'Cart'}
										{length(props.cart) > 0 && `Cart (${length(props.cart)})`}
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
										{length(props.cart) === 0 && 'Cart'}
										{length(props.cart) > 0 && `Cart (${length(props.cart)})`}
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
			return () => {
				doDispatch(SET_USER, null, name)
			}
		},
		handleCart: post => {
			dispatch({
				type: SET_CART,
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
		buttons: state.buttons,
		addItem: state.addItem,
		removeItem: state.removeItem
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(UserStore)
