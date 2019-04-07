import React, { Component }  from "react";
import { connect } from "react-redux";
import {CLASS_NAME_DROP ,TOGGLE_ABOUT ,TOGGLE, STOP_LOOP ,CLASS_NAME,} from '../redux/actions/actions'
import '../styles/mneuPopUp.css'



class MenuPopUp extends Component {
  constructor(props){
    super()
    this.props = props
  }

  dropDown = () => this.props.changeclassNameOfDrop(!this.props.state.data.dropIndex)
  openAbout =async () =>{
   await this.props.changeClassName("home")
   await  this.props.stopLoop(true)
   await this.props.toggle()
   await this.props.toggleAbout()
  } 
  

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
                          <h1 onClick={this.openAbout}>About</h1>
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
      toggle : () => dispatch({type : TOGGLE}),
      changeclassNameOfDrop : (className) => dispatch({type : CLASS_NAME_DROP,payload: className}),
      toggleAbout : () => dispatch({type : TOGGLE_ABOUT}),
      changeClassName : (className) => dispatch({type : CLASS_NAME,payload: className}),
      stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(MenuPopUp);