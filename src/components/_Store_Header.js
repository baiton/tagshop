import React from 'react'
import { AppBar, Drawer, FlatButton, MenuItem, Chip } from 'material-ui'
import { connect } from 'react-redux'
import tagshop from '../images/tagshop.png'
import history from '../history'
import { toUpper } from 'ramda'

class StoreHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
	}

	handleToggle = () => this.setState({ open: !this.state.open })

	render() {
		const props = this.props
		return (
			<div
				className="tc"
				style={{
					boxShadow: '0px 0px 5px black',
					backgroundColor: 'DeepPink',
					marginTop: '8px'
				}}
			>
				<AppBar
					style={{
						backgroundColor: 'DeepPink',
						height: '65px',
						position: 'fixed',
						top: '0'
					}}
					zDepth={0}
					onLeftIconButtonTouchTap={this.handleToggle}
				/>
				<img
					id="logo"
					src={props.user.user.media[0].profile_picture}
					className="br-100 ba white"
					style={{
						height: '50px',
						width: '50px',
						borderWidth: '2px',
						backgroundColor: 'white',
						position: 'relative',
						zIndex: '1500',
						top: '8'
					}}
					alt={tagshop}
				/>
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={open => this.setState({ open })}
				>
					<MenuItem onClick={e => history.replace('/')} primaryText="Home" />
				</Drawer>
				<h2 className="tc white bg-DeepPink mt2 mb1 oswald">
					{toUpper(props.user.user.media[0].username)}
				</h2>
				<div className="flex justify-between pr2 pl2 pb2 white f6">
					<Chip
						backgroundColor="DeepPink"
					>
					RECENT
				</Chip>
					<Chip
						backgroundColor="DeepPink"
					>
						POPULAR
					</Chip>
					<Chip
						backgroundColor="DeepPink"
					>
						SOLD OUT
					</Chip>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		addItem: state.addItem,
		menuOpen: state.menuOpen,
		state: state
	}
}

function mapActionsToProps(dispatch) {
	return {
		dispatch
	}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(StoreHeader)
