import React, { Component } from 'react'
import _Quantity from '../components/_Quantity'

const Item = props => {
  console.log('Item', props)

  let imageStyle = {
    backgroundImage: `url("${props.images}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '250px',
    width: '250px'
  }

  console.log('props.profile_picture', props.profile_picture)
  return (
    <div className="mdc-layout-grid__cell mdc-card demo-card demo-card--with-avatar">
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
        <button className="mdc-button mdc-button--raised mdc-card__action">
          Delete
        </button>
        <p className="">${props.price}</p>
      </section>
    </div>
  )
}
export default Item

// <nav className="">
//   <div className="">
//     <div className="">
//       <img
//         className="br4 h3 w3 dib"
//         alt="avatar"
//         src="http://www.fillmurray.com/300/300"
//       />
//     </div>
//     <div className="">
//       <p className="">
//         Beautiful portrait of Bill Murray that will look great over your
//         fireplace!
//       </p>
//     </div>
//     <div className="">
//       <_Quantity />
//     </div>
//     <div className=" ">
//       <p className="">$125.00</p>
//     </div>
//   </div>
// </nav>
//     )
//   }
// }
