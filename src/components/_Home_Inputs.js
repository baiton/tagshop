import React, { Component } from 'react'
const {TextField} = require('t63');

export default class Home_Inputs extends Component {
  render() {
    return (
      <section className="input-container">
        <div className="flex flex-column">
        <h2 className="flex justify-center ts-subtitle">TURNING YOUR INSTAGRAM FEED INTO AN ONLINE SHOP.</h2>
        <h2 className="flex justify-center mt0 instantly">INSTANTLY!</h2>
        </div>
        <div className="custom-input">
          <label>Instagram Username</label>
          <TextField hintText="Username" floatingLabelText="Instagram Username"/><br/>
          <label>Email Address</label>
          <TextField hintText="Email" floatingLabelText="Email"/><br/>
        </div>
      </section>
    )
  }
}
