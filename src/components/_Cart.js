import React, { Component } from 'react'
import '../css/cart.css'

export default class Cart extends Component {
  render() {
    return (
      <nav className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-2 ">
            <h4>Item</h4>
          </div>
          <div className="mdc-layout-grid__cell--span-6 ">
            <h4 className="description">Description</h4>
          </div>
          <div className="mdc-layout-grid__cell--span-2">
            <h4 className="quantity">Quantity</h4>
          </div>
          <div className="mdc-layout-grid__cell--span-2 ">
            <h4 className="price">Price</h4>
          </div>
        </div>
      </nav>
    )
  }
}
