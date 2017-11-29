import React from 'react'
import { AppBar, Drawer, FlatButton, MenuItem } from 'material-ui'
import { connect } from 'react-redux'
import tagshop from '../images/tagshop.png'
import history from '../history'
import { SET_DRAWER_TRUE } from '../constants'
import { toUpper } from 'ramda'

class StoreHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
	}

	handleToggle = () => this.setState({ open: !this.state.open })

	handleClose = () => this.setState({ open: false })

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
					titleStyle={{ margin: '0 auto', display: 'block' }}
					style={{
						backgroundColor: 'DeepPink',
						height: '65px',
						position: 'fixed',
						top: '0'
					}}
					zDepth={0}
					onLeftIconButtonTouchTap={this.handleToggle}
				/>
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={open => this.setState({ open })}
				>
					<MenuItem onClick={e => history.replace('/')} primaryText="Home" />
				</Drawer>
				<h2 className="tc white bg-DeepPink ma0 oswald">
					{toUpper(props.user.user.media[0].username)}
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
