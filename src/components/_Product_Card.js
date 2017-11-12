import React from 'react'
import '../css/product_card.css'
import { Link } from 'react-router-dom'

const Product_Card = props => {
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
				<div className="ma2" style={profileStyle} alt="" />
				<h1 className="oswald mdc-card__title user-label">{props.username}</h1>
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
						e.preventDefault, props.handleCart(props)
					}}
				>
					Buy
				</button>
				<p className="oswald">${props.price}</p>
			</section>
		</div>
	)
}
export default Product_Card
