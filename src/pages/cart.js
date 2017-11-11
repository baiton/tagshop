import history from '../history'
import _Cart from '../components/_Cart'
import _Item from '../components/_Item'

const React = require('react')
const { Link } = require('react-router-dom')
const { List, ListItem, Button, TextField } = require('t63')
const { connect } = require('react-redux')
const { SET_USER } = require('../constants')
const { getUser } = require('../db.js')

class Cart extends React.Component {
  componentDidMount() {
    console.log('props', this.props)
  }

  render() {
    const props = this.props
    return (
      <div className="avenir">
        <div>
          <header className="flex flex-row justify-between items-center h3 pa2">
            <h1 className="tc f2">Tagshop</h1>
          </header>
        </div>
        <div>
          <main>
            <div>
              <_Cart />
              <_Item />
              <a className="w-25  f6 link grow ba ph3 pv2 mb2 dib fr tc black">
                BUY
              </a>
            </div>
          </main>
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
        doDispatch('SET_USER', null, name)
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Cart)
