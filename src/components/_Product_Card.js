import React, { Component } from 'react'
import '../css/product_card.css'


const Product_Card = props => {
	console.log("card props", props);

	let imageStyle= {
		backgroundImage: `url("${props.images}")`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "250px",
		width: "250px"
	}

	console.log("props.profile_picture", props.profile_picture);
	return (
		<div className="mdc-layout-grid__cell mdc-card demo-card demo-card--with-avatar">
			<section className="mdc-card__primary">
				<div className="demo-card__avatar" />
				<h1 className="mdc-card__title">{props.username}</h1>
			</section>
			<section className="mdc-card__media demo-card__16-9-media" style={ imageStyle }/>
			<section className="mdc-card__supporting-text">
				<details>
					<summary>Description</summary>
					<p>
						{props.description}
					</p>
				</details>
			</section>
			<section className="mdc-card__actions flex justify-around">
				<button className="mdc-button mdc-button--raised mdc-card__action">
					Buy
				</button>
				<p className="">${props.price}</p>
			</section>
		</div>
	)
}
export default Product_Card
