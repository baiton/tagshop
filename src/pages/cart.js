import history from '../history'
import Item from '../components/_Item'
import _Product_Card from '../components/_Product_Card'

const React = require('react')
const { Link } = require('react-router-dom')
const { List, ListItem, Button, TextField } = require('t63')
const { connect } = require('react-redux')
const { SET_CART } = require('../constants')
const { getUser } = require('../db.js')
const { map, pathOr } = require('ramda')

class Cart extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUser(this.props.location.pathname.substring(1)))
    console.log('props', this.props)
  }

  render() {
    const props = this.props
    return (
      <div className="avenir">
        <div>
          <img
            id="tsBanner"
            className="flex center"
            src="http://tagshop.co/assets/media/tagshop_objects.png"
            alt="TagShop"
          />
        </div>
        <section className="wrapper">
          <h2>Your Cart</h2>
        </section>
        <div className="card-wrapper">
          {map(Item, pathOr([], ['media'], props.user.user))}
        </div>
      </div>
    )
  }
}

function mapActionsToProps(dispatch) {
  const doDispatch = (type, field, value) => {
    dispatch({
      type: type + field,
      payload: value
    })
  }
  return {
    dispatch,
    handleUser: name => {
      return e => {
        doDispatch('SET_CART', null, name)
      }
    },
    handleUserVerificationNo: e =>
      window.alert(
        'Please DM this artist and let them know to update their shipping information in order to purchase this product'
      )
    // handleUserVerificationYes:
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Cart)
