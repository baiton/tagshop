import React, { Component } from 'react'

export default class Items extends Component {
  render() {
    return (
      <div className="">
        <div className="mdc-select " role="listbox" tabIndex="0">
          <span className="mdc-select__selected-text">1</span>
          <div className="mdc-simple-menu mdc-select__menu">
            <ul className="mdc-list mdc-simple-menu__items">
              <li
                className="mdc-list-item"
                role="option"
                id="0"
                aria-selected="true"
              >
                0
              </li>
              <li
                className="mdc-list-item"
                role="option"
                id="1"
                tabIndex="0"
                aria-selected="true"
              >
                1
              </li>
              <li
                className="mdc-list-item"
                role="option"
                id="2"
                tabIndex="0"
                aria-selected="true"
              >
                2
              </li>
              <li
                className="mdc-list-item"
                role="option"
                id="3"
                tabIndex="0"
                aria-selected="true"
              >
                3
              </li>
              <li
                className="mdc-list-item"
                role="option"
                id="4"
                tabIndex="0"
                aria-selected="true"
              >
                4
              </li>
              <li
                className="mdc-list-item"
                role="option"
                id="5"
                tabIndex="0"
                aria-selected="true"
              >
                5
              </li>
              <li
                className="mdc-list-item"
                role="option"
                id="6"
                tabIndex="0"
                aria-selected="true"
              >
                6
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
