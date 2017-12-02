import React from 'react'
import {
	CardMedia,
	CardText,
	CardHeader,
	CardTitle,
	CardActions,
	Card,
	FlatButton,
	RaisedButton,
	Chip
} from 'material-ui'
import '../css/product_card.css'
import { Link } from 'react-router-dom'
const { contains, map, indexOf, remove } = require('ramda')
const { SET_CART } = require('../constants')

function Tags(tag) {
	return (
		<div key={tag} style={{ paddingBottom: '8px' }}>
			<Chip> {tag} </Chip>
		</div>
	)
}

function data(tags) {
	const index = indexOf('tagshop', tags)
	return remove(index, 1, tags)
}

const Product_Card = props => {
	return (
		<Card
			style={{
				display: 'block',
				width: '100vw',
				paddingBottom: '20px'
			}}
			key={props.media_id}
		>
			<Link to={'https://instagram.com/' + props.username} target="_blank">
				<CardHeader
					titleStyle={{ verticalAlign: 'middle' }}
					title={props.username}
					avatar={props.profile_picture}
				/>
			</Link>
			<CardMedia>
				<img src={props.images[0]} alt="" />
			</CardMedia>
			<CardTitle
				style={{ paddingBottom: '0' }}
				className="oswald flex"
				title={'$' + props.price}
			>
				<FlatButton label="Details" style={{ color: 'DeepPink' }} />
				{!contains(props.media_id, map(x => x.media_id, props.cart)) && (
					<RaisedButton
						backgroundColor="DeepPink"
						labelStyle={{ color: 'white' }}
						onClick={e => {
							props.dispatch({
								type: SET_CART,
								payload: props
							})
						}}
						style={{
							float: 'right'
						}}
						label="Add to Cart"
					/>
				)}
				{contains(props.media_id, map(x => x.media_id, props.cart)) && (
					<Link to="/cart">
						<RaisedButton
							label="Cart"
							labelStyle={{ color: 'white' }}
							backgroundColor="DeepPink"
						/>
					</Link>
				)}
			</CardTitle>
			<CardText>{props.description}</CardText>
			<CardActions style={{ width: '100%', flexWrap: 'wrap', display: 'flex' }}>
				{map(Tags, data(props.tags))}
			</CardActions>
		</Card>
	)
}
export default Product_Card
