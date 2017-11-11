import React, { Component } from 'react'
import _Quantity from '../components/_Quantity'

export default class Items extends Component {
  render() {
    return (
      <nav className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-2 tc">
            <img
              className="br4 h3 w3 dib"
              alt="avatar"
              src="http://www.fillmurray.com/300/300"
            />
          </div>
          <div className="mdc-layout-grid__cell--span-6 ">
            <p className="tc">
              Beautiful portrait of Bill Murray that will look great over your
              fireplace!
            </p>
          </div>
          <div className="mdc-layout-grid__cell--span-2">
            <_Quantity />
          </div>
          <div className="mdc-layout-grid__cell--span-2 ">
            <p className="tc">$125.00</p>
          </div>
        </div>
      </nav>
    )
  }
}
