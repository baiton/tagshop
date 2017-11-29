import React from 'react'
import { AppBar, MenuItem, Drawer } from 'material-ui'
import history from '../history'
import loading from '../images/loading.svg'
import tagshop from '../images/tagshop.png'
const { pathOr } = require('ramda')

class CartEmpty extends React.Component {
	componentDidMount() {
		this.setState({ menuOpen: false })
	}

	handleToggle = () => this.setState({ menuOpen: true })

	render() {
		return (
			<div className="oswald">
				<div
					className="tc"
					style={{
						boxShadow: '0px 0px 5px black',
						backgroundColor: 'DeepPink'
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
								alt={loading}
							/>
						}
						style={{
							backgroundColor: 'DeepPink',
							height: '65px'
						}}
						zDepth={0}
						onLeftIconButtonTouchTap={this.handleToggle}
					/>
					<Drawer
						open={pathOr(false, ['menuOpen'], this.state)}
						onRequestChange={open => this.setState({ menuOpen: open })}
						docked={false}
					>
						<MenuItem onClick={e => history.replace('/')} primaryText="Home" />
					</Drawer>
					<h2 className="tc white bg-DeepPink ma0 cubano pb2">TAGSHOP</h2>
				</div>
				<section className="input-container">
					<h2 className="flex justify-center ts-title">
						YOU HAVE NOTHING IN YOUR CART. <br /> ADD ITEMS AND THEN COME BACK.
					</h2>
				</section>
			</div>
		)
	}
}

export default CartEmpty
