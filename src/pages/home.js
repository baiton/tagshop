import history from '../history'
import Product_Card from '../components/_Product_Card.js'
import '../css/home.css'

const React = require('react')
const { Link } = require('react-router-dom')
const { connect } = require('react-redux')

class Home extends React.Component {
	componentDidMount() {}

	render() {
		const props = this.props
		const userName = this.props.location.pathname.substring(1)
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
					<Link to="/cart">
						<button className="f6 link dim br-pill ph3 pv2 ma2 dib white bg-blue">
							Cart
						</button>
					</Link>
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
		handleBack: e => history.goBack()
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
