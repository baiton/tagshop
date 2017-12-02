import Item from '../components/_Item'
import { Stepper, Step, StepButton } from 'material-ui'
import history from '../history'
import CartEmpty from '../components/_Cart_Empty'
import CartHeader from '../components/_Cart_Header'
const React = require('react')
const { connect } = require('react-redux')
const { SET_CART } = require('../constants')
const { map, compose, assoc } = require('ramda')

class Cart extends React.Component {
	componentDidMount() {
		this.setState({ menuOpen: false })
	}

	handleToggle = () => this.setState({ menuOpen: true })
	state = {
		stepIndex: 0
	}

	render() {
		const props = this.props
		return (
			<div>
				{!(props.cart <= []) && (
					<div>
						<CartHeader />
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
								style={{ color: '#D7D9D0', cursor: 'pointer' }}
								onClick={e => history.goBack()}
							>
								Shop
							</a>
							<a
								className="pa3 f6 oswald"
								style={{ color: '#D7D9D0', cursor: 'pointer' }}
							>
								Review Cart
							</a>
							<a
								className="pa3 f6 oswald"
								style={{ color: '#D7D9D0', cursor: 'pointer' }}
							>
								Shipping
							</a>
						</div>
						<Stepper
							linear={false}
							style={{ position: 'fixed', bottom: '0', left: '0', right: '0' }}
						>
							<Step>
								<StepButton onClick={() => this.setState({ stepIndex: 0 })}>
									Review Cart
								</StepButton>
							</Step>
							<Step>
								<StepButton onClick={() => this.setState({ stepIndex: 1 })}>
									Shipping
								</StepButton>
							</Step>
							<Step>
								<StepButton onClick={() => this.setState({ stepIndex: 2 })}>
									Payment
								</StepButton>
							</Step>
							<Step>
								<StepButton onClick={() => this.setState({ stepIndex: 3 })}>
									Confirm
								</StepButton>
							</Step>
						</Stepper>
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
