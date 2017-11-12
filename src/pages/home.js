import history from '../history'
import Product_Card from '../components/_Product_Card.js'
import '../css/home.css'
import TextField from 'material-ui/TextField';
import Home_Inputs from '../components/_Home_Inputs.js'


const React = require('react')
const {Link} = require('react-router-dom')
const {connect} = require('react-redux')

class Home extends React.Component {
  componentDidMount() {}

  render() {
    const props = this.props
    const userName = this.props.location.pathname.substring(1)
    const inputStyle = {
      transformOrigin: "19.5px center"
    }
    return (
      <div className="avenir">
        <div className="flex justify-center">
          <img id="logo" src="http://tagshop.co/assets/media/brand250.png" alt="TagShop"/>
        </div>
					<Home_Inputs/>
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
    },
    handleBack: e => history.goBack()
  }
}

const mapStateToProps = state => {
  return {user: state.user}
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
