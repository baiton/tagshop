import React from 'react'
import { AppBar, FlatButton } from 'material-ui'
import { Link } from 'react-router-dom'
import CartPreview from './_Cart_Preview'

class StoreFooter extends React.Component {
	render() {
		return (
			<div
				className="tc"
				style={{
					boxShadow: '0px 0px 0px 2px MediumVioletRed',
					backgroundColor: 'DeepPink',
					bottom: '0',
					position: 'fixed',
					right: '0',
					left: '0'
				}}
			>
				<AppBar
					title="#TAGSHOP"
					className="tc oswald"
					iconElementLeft={<CartPreview />}
					iconElementRight={
						<Link to="/cart">
							<FlatButton label="Checkout" style={{ color: 'white' }} />
						</Link>
					}
					style={{ backgroundColor: 'DeepPink' }}
				/>
			</div>
		)
	}
}

export default StoreFooter
