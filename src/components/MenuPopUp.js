import React, { Component }  from "react";
import { connect } from "react-redux";
// import {TOGGLE} from '../redux/actions/actions'
import '../styles/mneuPopUp.css'



class MenuPopUp extends Component {
  constructor(props){
    super()
    this.props = props
  }

  render (){
        return(
                <div className="menu-popup-container" >

                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({

    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(MenuPopUp);