import '../css/userstore.css'
import Product_Card from '../components/_Product_Card.js'
import { AppBar, FlatButton, Drawer, MenuItem } from 'material-ui'
import history from '../history'
import CartPreview from '../components/_Cart_Preview'
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
		this.setState({ menuOpen: false })
	}

	handleToggle = () => this.setState({ menuOpen: true })

	handleClose = () => this.setState({ menuOpen: false })

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
									<img
										id="logo"
										src={props.user.user.media[0].profile_picture}
										className="br-100 ba white ma2"
										style={{
											height: '50px',
											width: '50px',
											borderWidth: '2px',
											backgroundColor: 'white'
										}}
										alt={loading}
									/>
								}
								style={{
									backgroundColor: 'DeepPink',
									height: '65px'
								}}
								zDepth={0}
								onLeftIconButtonTouchTap={this.handleToggle}
							/>
							<Drawer
								open={pathOr('', ['menuOpen'], this.state)}
								onRequestChange={open => this.setState({ menuOpen: open })}
								docked={false}
							>
								<MenuItem
									onClick={e => history.replace('/')}
									primaryText="Home"
								/>
							</Drawer>
							<h2 className="tc white bg-DeepPink ma0 cubano">
								{toUpper(props.match.params.username)}
							</h2>
							<div className="flex justify-between pr4 pl4 pb3 pt2 white f6">
								<FlatButton
									label="RECENT"
									style={{ color: 'white', borderRadius: '9999px' }}
								/>
								<FlatButton
									label="POPULAR"
									style={{ color: 'white', borderRadius: '9999px' }}
								/>
								<FlatButton
									label="SOLD OUT"
									style={{ color: 'white', borderRadius: '9999px' }}
								/>
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
								boxShadow: '0px 0px 0px 2px MediumVioletRed',
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
								iconElementLeft={<CartPreview />}
								iconElementRight={
									<Link to="/cart">
										<FlatButton
											label="Checkout"
											style={{ borderRadius: '9999px', color: 'white' }}
										/>
									</Link>
								}
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
		menuOpen: state.menuOpen
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(UserStore)
