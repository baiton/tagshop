import React from 'react'
import {
	CardMedia,
	CardText,
	CardHeader,
	CardTitle,
	CardActions,
	Card,
	FlatButton,
	RaisedButton
} from 'material-ui'
import '../css/product_card.css'
import { Link } from 'react-router-dom'
const { contains, map, indexOf, length, remove } = require('ramda')
const { SET_CART } = require('../constants')

function Tags(tag) {
	return <FlatButton key={tag} backgroundColor="lightGrey" label={tag} />
}

function data(tags) {
	const index = indexOf('tagshop', tags)
	if (length(tags) === 1) {
		return ['No tags']
	} else {
		return remove(index, index, tags)
	}
}

const Product_Card = props => {
	return (
		<Card
			style={{
				display: 'block',
				width: '100vw'
			}}
			key={props.media_id}
		>
			<CardHeader
				titleStyle={{ verticalAlign: 'middle' }}
				title={props.username}
				avatar={props.profile_picture}
			/>
			<CardMedia>
				<img
					src={props.images[0]}
					alt=""
					style={{
						height: '100%',
						width: '100%',
						margin: '0',
						padding: '0'
					}}
				/>
			</CardMedia>
			<CardTitle
				style={{ paddingBottom: '0' }}
				className="oswald flex"
				title={'$' + props.price}
			>
				<CardActions style={{ textAlign: 'right' }}>
					<FlatButton
						label="Details"
						style={{ color: 'DeepPink', position: 'relative' }}
					/>

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
				</CardActions>
			</CardTitle>
			<CardText>{props.description}</CardText>
			<CardActions>{map(Tags, data(props.tags))}</CardActions>
		</Card>
	)
}
export default Product_Card
