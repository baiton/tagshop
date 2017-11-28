import React from 'react'
import { IconMenu, MenuItem, IconButton } from 'material-ui'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'

const Item = props => {
	return (
		<div className="flex oswald">
			<img
				className="pa2"
				style={{
					height: '40px',
					width: '40px',
					borderRadius: '100%',
					borderWidth: '0px'
				}}
				src={props.images[0]}
				alt={props.images[0]}
			/>
			<div className="pr7">
				<a className="black f6">{props.username}</a>
				<h2 className="black f6">{'$' + props.price}</h2>
			</div>
			<IconMenu
				iconButtonElement={
					<IconButton touch={true}>
						<NavigationExpandMoreIcon />
					</IconButton>
				}
			>
				<MenuItem primaryText="Download" />
				<MenuItem primaryText="More Info" />
			</IconMenu>
		</div>
	)
}

export default Item
