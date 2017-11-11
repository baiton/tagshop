import React, {Component} from 'react';
import '../css/product_card.css'



export default class Product_Card extends Component {

  render() {
    return (
      <div className="mdc-card demo-card demo-card--with-avatar">
        <section className="mdc-card__primary">
          <div className="demo-card__avatar"></div>
          <h1 className="mdc-card__title">Title</h1>
          <h2 className="mdc-card__subtitle">Subhead</h2>
        </section>
        <section className="mdc-card__media demo-card__16-9-media"></section>
        <section className="mdc-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
        </section>
        <section className="mdc-card__actions">
          <button className="mdc-button mdc-button--compact mdc-card__action">Buy</button>
        </section>
      </div>
    )
  }
}
