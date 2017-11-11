import history from '../history'
const React = require('react')
const { Link } = require('react-router-dom')
const { List, ListItem, Button } = require('t63')
const { connect } = require('react-redux')
const { SET_USER } = require('../constants')
const { getUser } = require('../db.js')

class Home extends React.Component {
	componentDidMount() {
		this.props.dispatch(getUser(this.props.location.pathname.substring(1)))
		console.log('props', this.props)
	}

	render() {
		const props = this.props
		const userName = this.props.location.pathname.substring(1)
		return (
			<div className="avenir">
				<div>
					<header className="flex flex-row justify-between items-center h3 pa2">
						<h1 className="tc f2">Tagshop</h1>
						<a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue">
							Login with Instagram
						</a>
					</header>
				</div>
				<h2 className="pl2">Is {userName} your userName?</h2>
				<div className="pl2">
					<a
						className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue"
						onclick={props.handleUser(userName)}
					>
						Yes
					</a>
					<a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue">
						No
					</a>
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
