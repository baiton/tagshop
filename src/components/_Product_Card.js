import React from 'react'
import '../css/product_card.css'
import { Snackbar } from 'material-ui'
import { Link } from 'react-router-dom'
const { contains, map } = require('ramda')
const {
	SET_CART,
	CLEAR_CART,
	SET_ADD_ITEM,
	CLEAR_ADD_ITEM,
	SET_REMOVE_ITEM,
	CLEAR_REMOVE_ITEM
} = require('../constants')

const Product_Card = props => {
	console.log('SET_ADD_ITEM', props.addItem)
	let imageStyle = {
		backgroundImage: `url("${props.images[0]}")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	}

	let profileStyle = {
		backgroundImage: `url("${props.profile_picture}")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '50px',
		width: '50px',
		borderRadius: '100%'
	}

	return (
		<div
			className="mdc-card demo-card demo-card--with-avatar"
			key={props.media_id}
		>
			<section className="flex mdc-card__primary">
				<div className="demo-card__avatar" />
				<div className="ma2" style={profileStyle} alt="" />
				<section>
					<a
						href={'https://instagram.com/' + props.username}
						target="_blank"
						className="oswald mdc-card__title user-label dib v-mid"
					>
						{props.username}
					</a>
				</section>
			</section>
			<section
				className="mdc-card__media demo-card__16-9-media"
				style={imageStyle}
			/>
			<section className="mdc-card__supporting-text">
				<details style={{ cursor: 'pointer' }}>
					<summary>Description</summary>
					<p>{props.description}</p>
				</details>
			</section>
			<section className="mdc-card__actions">
				<div>
					{
						//Buy Button
					}
					{!contains(props.media_id, map(x => x.media_id, props.cart)) && (
						<div>
							<button
								className="mdc-button mdc-button--raised mdc-card__action"
								onClick={e => {
									props.dispatch({
										type: SET_CART,
										payload: props
									})
									console.log('hello')
									props.dispatch({
										type: SET_ADD_ITEM
									})
									console.log('bye')
									console.log(props.addItem)
								}}
							>
								Buy
							</button>
							<Snackbar
								open={props.addItem}
								message="An item was added to the cart"
								autoHideDuration={2500}
								onRequestClose={e =>
									props.dispatch({
										type: CLEAR_ADD_ITEM
									})}
							/>
						</div>
					)}

					{contains(props.media_id, map(x => x.media_id, props.cart)) && (
						<div className="flex justify-between">
							<Link to="/cart">
								<button className="mdc-button mdc-button--raised mdc-card__action">
									Cart
								</button>
							</Link>
							<div>
								<a
									className="red pa2 fr"
									style={{ cursor: 'default' }}
									onClick={e => {
										props.dispatch({
											type: CLEAR_CART,
											payload: { cartObj: props, id: props.media_id }
										})
										props.dispatch({
											type: CLEAR_ADD_ITEM
										})
									}}
								>
									X
								</a>
							</div>
						</div>
					)}
				</div>
				<p className="oswald" style={{ cursor: 'default' }}>
					${props.price}
				</p>
			</section>
		</div>
	)
}
export default Product_Card
