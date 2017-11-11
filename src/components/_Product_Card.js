import React, {Component} from 'react';


export default class Product_Card extends Component {

  render() {
    return (
      <div class="mdc-card demo-card demo-card--with-avatar">
        <section class="mdc-card__primary">
          <div class="demo-card__avatar"></div>
          <h1 class="mdc-card__title">Title</h1>
          <h2 class="mdc-card__subtitle">Subhead</h2>
        </section>
        <section class="mdc-card__media demo-card__16-9-media"></section>
        <section class="mdc-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
        </section>
        <section class="mdc-card__actions">
          <button class="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
          <button class="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
        </section>
      </div>
    )
  }
}
