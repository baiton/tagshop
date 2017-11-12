import history from '../history'
import Product_Card from '../components/_Product_Card.js'
import '../css/home.css'
const { TextField } = require('t63')
const React = require('react')
const { Link } = require('react-router-dom')
const { connect } = require('react-redux')

class Home extends React.Component {
	componentDidMount() {}

	render() {
		const props = this.props
		const userName = this.props.location.pathname.substring(1)
		const inputStyle = {
			transformOrigin: '19.5px center'
		}
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
						<form>
							<label>Instagram Username</label>
							<TextField
								hintText="Username"
								floatingLabelText="Instagram Username"
								value={props.InstaUser}
								onChange={props.handleInsta}
							/>
							<br />
							<label>Email Address</label>
							<TextField
								hintText="Email"
								floatingLabelText="Email"
								value={props.Email}
								onChange={props.handleEmail}
							/>
							<br />
						</form>
						<Link to={'/' + props.InstaUser}>
							<a class="f6 link dim ba ph3 pv2 mb2 dib black">Submit</a>
						</Link>
					</div>
				</section>
			</div>
		)
	}
}

function mapActionsToProps(dispatch) {
	const doDispatch = (type, value) => {
		console.log(value)
		dispatch({ type: type, payload: value })
	}
	return {
		dispatch,
		handleInsta: e => doDispatch('SET_INSTA', e.target.value),
		handleEmail: e => doDispatch('SET_EMAIL', e.target.value)
	}
}

const mapStateToProps = state => {
	console.log('state', state)
	return { InstaUser: state.insta.insta, Email: state.email.email }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
