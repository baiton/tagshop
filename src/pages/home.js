import '../css/home.css'
import { TextField } from 'material-ui'
const React = require('react')
const { connect } = require('react-redux')
const { CLEAR_INSTA, CLEAR_USER } = require('../constants')

class Home extends React.Component {
	componentDidMount() {
		this.props.dispatch({
			type: CLEAR_INSTA
		})
		this.props.dispatch({
			type: CLEAR_USER
		})
	}

	render() {
		const props = this.props
		return (
			<div className="avenir">
				<div className="flex justify-center">
					<img
						id="logo"
						src="http://tagshop.co/assets/media/brand250.png"
						alt="TagShop"
					/>
				</div>
				<section className="input-container">
					<div className="flex flex-column">
						<h2 className="flex justify-center ts-subtitle">
							TURNING YOUR INSTAGRAM FEED INTO AN ONLINE SHOP.
						</h2>
						<h2 className="flex justify-center mt0 instantly">INSTANTLY!</h2>
					</div>
					<div className="custom-input">
						<label>Instagram Username</label>
						<TextField
							value={props.InstaUser}
							onChange={props.handleInsta(props.handleInsta)}
						/>
						<br />
						<label>Email</label>
						<TextField
							value={props.Email}
							onChange={props.handleEmail(props.handleEmail)}
						/>
						<br />
						<a
							className="f6 link dim ba ph3 pv2 mb2 dib black"
							href={'/' + props.InstaUser}
						>
							Submit
						</a>
					</div>
				</section>
			</div>
		)
	}
}

function mapActionsToProps(dispatch) {
	const doDispatch = (type, value) => {
		dispatch({ type: type, payload: value })
	}
	return {
		dispatch,
		handleInsta: e => e => doDispatch('SET_INSTA', e.target.value),
		handleEmail: e => e => doDispatch('SET_EMAIL', e.target.value)
	}
}

const mapStateToProps = state => {
	return { InstaUser: state.insta, Email: state.email }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
