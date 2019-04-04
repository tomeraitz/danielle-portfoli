import React, { Component }  from "react";
import { connect } from "react-redux";
import {CLASS_NAME_DROP} from '../redux/actions/actions'
import '../styles/mneuPopUp.css'



class MenuPopUp extends Component {
  constructor(props){
    super()
    this.props = props
  }

  dropDown = () => this.props.changeclassName(!this.props.state.data.dropIndex)

  

  render (){
    let dropclss =this.props.state.data.classNameDrop[+ this.props.state.data.dropIndex]
        return(
                <div className="menu-popup-container" >
                  <div className="list">
                    <div className="list-dropdow">
                        <h1 onClick={this.dropDown}>Projects</h1>
                        <div className={dropclss}>Project 1</div>
                        <div className={dropclss}>Project 2</div>
                        <div className={dropclss}>Project 3</div>
                    </div>
                    <div className="list-dropdow">
                          <h1>About</h1>
                    </div>
                    <div className="list-dropdow">
                          <h1>Contact</h1>
                    </div>
                  </div>
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
      changeclassName : (className) => dispatch({type : CLASS_NAME_DROP,payload: className}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(MenuPopUp);