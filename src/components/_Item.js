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

	return (
		<div
			className="mdc-layout-grid__cell mdc-card demo-card demo-card--with-avatar"
			key={props.media_id}
		>
			<section className="mdc-card__primary">
				<div className="demo-card__avatar" />
				<h1 className="mdc-card__title">{props.username}</h1>
			</section>
			<section
				className="mdc-card__media demo-card__16-9-media"
				style={imageStyle}
			/>
			<section className="mdc-card__supporting-text">
				<details>
					<summary>Description</summary>
					<p>{props.description}</p>
				</details>
			</section>
			<section className="mdc-card__actions flex justify-around">
				<button
					className="mdc-button mdc-button--raised mdc-card__action"
					onClick={e => {
						props.dispatch({
							type: CLEAR_CART,
							payload: props.array
						})
					}}
				>
					Delete
				</button>
				<p className="">${props.price}</p>
			</section>
		</div>
	)
}
export default Item
