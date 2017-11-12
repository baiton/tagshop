import history from '../history'
import '../css/userstore.css'
import Product_Card from '../components/_Product_Card.js'
const React = require('react')
const { Link } = require('react-router-dom')
const { List, ListItem, Button } = require('t63')
const { connect } = require('react-redux')
const { SET_USER } = require('../constants')
const { getUser } = require('../db.js')
const { map, pathOr, assoc, compose } = require('ramda')

class UserStore extends React.Component {
	componentDidMount() {
		this.props.dispatch(getUser(this.props.location.pathname.substring(1)))
	}

	render() {
		const props = this.props
		const userName = this.props.location.pathname.substring(1)
		return (
			<div className="avenir">
				<div>
					<img
						id="logo"
						className="flex center"
						src="http://tagshop.co/assets/media/brand250.png"
						alt="TagShop"
					/>
				</div>
				<section className="wrapper">
					<h2 className="f4 ma0">Are you {userName}?</h2>
					<div className="pl2 user-buttons">
						<a className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
							Yes
						</a>
						<a
							className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue"
							onClick={this.props.handleUserVerificationNo}
						>
							No
						</a>
					</div>
				</section>
				<div className="card-wrapper">
					{compose(
						map(Product_Card),
						map(assoc('dispatch', this.props.dispatch)),
						map(assoc('handleCart', this.props.handleCart))
					)(pathOr([], ['user', 'user', 'media'], props))}
				</div>
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
			console.log('post', post)
			dispatch({
				type: 'SET_CART',
				payload: post
			})
		},
		handleUserVerificationNo: e =>
			window.alert(
				'Please DM this artist and let them know to update their shipping information in order to purchase this product'
			)
		// handleUserVerificationYes:
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		cart: state.cart
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(UserStore)
