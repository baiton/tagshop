import Item from '../components/_Item'
import { AppBar, Drawer, MenuItem, Stepper } from 'material-ui'
import history from '../history'
import loading from '../images/loading.svg'
import tagshop from '../images/tagshop.png'
import CartEmpty from '../components/_Cart_Empty'
const React = require('react')
const { connect } = require('react-redux')
const { SET_CART } = require('../constants')
const { map, compose, assoc, pathOr } = require('ramda')

class Cart extends React.Component {
	componentDidMount() {
		this.setState({ menuOpen: false })
	}

	handleToggle = () => this.setState({ menuOpen: true })

	render() {
		const props = this.props
		console.log('image', tagshop)
		return (
			<div>
				{!(props.cart <= []) && (
					<div>
						<div
							className="tc"
							style={{
								boxShadow: '0px 0px 5px black',
								backgroundColor: 'DeepPink',
								position: 'sticky',
								top: '0',
								right: '0',
								left: '0'
							}}
						>
							<AppBar
								title={
									<img
										id="logo"
										src={tagshop}
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
								open={pathOr(false, ['menuOpen'], this.state)}
								onRequestChange={open => this.setState({ menuOpen: open })}
								docked={false}
							>
								<MenuItem
									onClick={e => history.replace('/')}
									primaryText="Home"
								/>
							</Drawer>
							<h2 className="tc white bg-DeepPink ma0 cubano pb2">TAGSHOP</h2>
						</div>
						<section className="flex justify-center">
							<h2 className="oswald f2" style={{ color: 'DeepPink' }}>
								CHECKOUT
							</h2>
						</section>
						<div className="card-wrapper">
							{compose(
								map(Item),
								map(assoc('dispatch', props.dispatch)),
								map(assoc('array', props))
							)(props.cart)}
						</div>
						<div
							className="flex justify-between"
							style={{
								position: 'fixed',
								bottom: '70px',
								right: '0',
								left: '0'
							}}
						>
							<a
								className="pa3 f6 oswald"
								style={{ color: '#D7D9D0' }}
								onClick={e => history.goBack()}
							>
								Shop
							</a>
							<a className="pa3 f6 oswald" style={{ color: '#D7D9D0' }}>
								Review Cart
							</a>
							<a className="pa3 f6 oswald" style={{ color: '#D7D9D0' }}>
								Shipping
							</a>
						</div>
						<Stepper />
					</div>
				)}
				{props.cart <= [] && <CartEmpty />}
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
