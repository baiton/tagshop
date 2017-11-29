import React from 'react'
import { IconMenu, MenuItem, IconButton } from 'material-ui'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import { has } from 'ramda'

const Item = props => {
	return (
		<div className="flex oswald" key={props.media_id}>
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
			{has('quanity', props) && <a>props.quanity</a>}
			{!has('quanity', props) && (
				<a className="f6" style={{ lineHeight: '3' }}>
					1
				</a>
			)}
			<IconMenu
				maxHeight={100}
				iconButtonElement={
					<IconButton touch={true}>
						<NavigationExpandMoreIcon />
					</IconButton>
				}
			>
				<MenuItem primaryText={1} />
				<MenuItem primaryText={2} />
				<MenuItem primaryText={3} />
				<MenuItem primaryText={4} />
				<MenuItem primaryText={5} />
			</IconMenu>
		</div>
	)
}

export default Item
