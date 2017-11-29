import React from 'react'
import { AppBar, Drawer, FlatButton, MenuItem } from 'material-ui'
import { connect } from 'react-redux'
import tagshop from '../images/tagshop.png'
import history from '../history'
import { SET_DRAWER_TRUE } from '../constants'
import { getUser } from '../db'
import { pathOr } from 'ramda'

class StoreHeader extends React.Component {
	componentDidMount() {
		console.log('props', this.props)
	}

	render() {
		const props = this.props
		return (
			<div
				className="tc"
				style={{
					boxShadow: '0px 0px 5px black',
					backgroundColor: 'DeepPink',
					marginTop: '65px'
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
							alt={tagshop}
						/>
					}
					style={{
						backgroundColor: 'DeepPink',
						height: '65px',
						position: 'fixed',
						top: '0'
					}}
					zDepth={0}
					onLeftIconButtonTouchTap={e =>
						props.dispatch({
							type: SET_DRAWER_TRUE
						})}
				/>
				<Drawer
					open={props.drawerStatus}
					onRequestChange={!props.drawerStatus}
					docked={false}
				>
					<MenuItem onClick={e => history.replace('/')} primaryText="Home" />
				</Drawer>
				<h2 className="tc white bg-DeepPink ma0 oswald">
					{
						//toUpper(props.match.params.username)
					}
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
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		addItem: state.addItem,
		menuOpen: state.menuOpen
	}
}

function mapActionsToProps(dispatch) {
	return {
		dispatch
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(StoreHeader)
