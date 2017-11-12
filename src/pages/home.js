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
			<div className="avenir wrapper">
				<div>
						<img
							id="tsBanner"
							className="flex center"
							src="http://tagshop.co/assets/media/tagshop_objects.png"
							alt="TagShop"
						/>
				</div>
				<h2 className="pl2">Is {userName} your userName?</h2>
				<div className="pl2">
					<a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue">
						Yes
					</a>
					<a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue">
						No
					</a>
				</div>
				<Product_Card />
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
		}
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
