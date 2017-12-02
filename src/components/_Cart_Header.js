import React from 'react'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import tagshop from '../images/tagshop.png'
import history from '../history'

class CartHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
	}

	handleToggle = () => this.setState({ open: !this.state.open })

	render() {
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
					src={tagshop}
					className="br-100 ba white"
					style={{
						height: '50px',
						width: '50px',
						borderWidth: '2px',
						backgroundColor: 'white',
						position: 'relative',
						zIndex: '2000',
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
				<h2 className="white bg-DeepPink oswald ma2 pb2">TAGSHOP</h2>
			</div>
		)
	}
}
export default CartHeader
