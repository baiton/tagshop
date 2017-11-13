const {
  SET_USER,
  SET_CART,
  CLEAR_CART,
  CLEAR_CART_X,
  SET_EMAIL,
  SET_INSTA,
  SET_AMOUNT
} = require('./constants')
const { combineReducers } = require('redux')
const {
  merge,
  append,
  drop,
  findIndex,
  propEq,
  pathOr,
  map,
  compose,
  pathEq,
  remove
} = require('ramda')

export default combineReducers({
  user,
  cart,
  email,
  insta,
  amount
})

function user(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return merge(state, { user: action.payload })
    default:
      return state
  }
}

function cart(state = [], action) {
  console.log('action.payload cart', action.payload)
  switch (action.type) {
    case SET_CART:
      return append(action.payload, state)
    case CLEAR_CART:
      const idx = findIndex(propEq('media_id', action.payload.id))(
        action.payload.cartObj.cart
      )
      return remove(idx, 1, action.payload.cartObj.cart)
    case CLEAR_CART_X:
      return []
    default:
      return state
  }
}

function email(state = {}, action) {
  switch (action.type) {
    case SET_EMAIL:
      return merge(state, { email: action.payload })
    default:
      return state
  }
}

function insta(state = {}, action) {
  switch (action.type) {
    case SET_INSTA:
      return merge(state, { insta: action.payload })
    default:
      return state
  }
}

function amount(state = {}, action) {
  switch (action.type) {
    case SET_AMOUNT:
      return state + action.payload
    default:
      return state
  }
}
