import React, { Component } from 'react'
import _Quantity from '../components/_Quantity'
import { CLEAR_CART } from '../constants'

const Item = props => {
	let imageStyle = {
		backgroundImage: `url("${props.images}")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '250px',
		width: '250px'
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
			className="mdc-layout-grid__cell mdc-card demo-card demo-card--with-avatar"
			key={props.media_id}
		>
			<section className="flex mdc-card__primary">
				<div className="demo-card__avatar" />
				<div className="ma2" style={profileStyle} />
				<a
					href={'https://instagram.com/' + props.username}
					target="_blank"
					style={{ cursor: 'default' }}
				>
					{props.username}
				</a>
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
			<section className="mdc-card__actions flex justify-around">
				<div>
					<button
						className="mdc-button mdc-button--raised mdc-card__action"
						id={props.media_id}
						onClick={e => {
							props.dispatch({
								type: CLEAR_CART,
								payload: { cartObj: props.array, id: props.media_id }
							})
						}}
					>
						Remove
					</button>
				</div>
				<p className="oswald">${props.price}</p>
			</section>
		</div>
	)
}

export default Item
