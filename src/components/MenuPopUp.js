import React, { Component }  from "react";
import { connect } from "react-redux";
import {CLASS_NAME_DROP ,TOGGLE_ABOUT ,TOGGLE, STOP_LOOP ,CLASS_NAME, TOGGLE_CONTACT} from '../redux/actions/actions'
import {CURRENT_PROJECT} from '../redux/actions/projectsActions'
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

  openContact = async () =>{
    await this.props.changeClassName("home")
    await  this.props.stopLoop(true)
    await this.props.toggle()
    await this.props.toggleContact()
   } 

  openProject = (e) => this.props.currentProject(parseInt(e.target.id))
  

  render (){
    let dropclss =this.props.state.data.classNameDrop[+ this.props.state.data.dropIndex]
        return(
                <div className="menu-popup-container" >
                  <div className="list">
                    <div className="list-dropdow">
                        <h1 onClick={this.dropDown}>{this.props.state.data.thisProjectsTtitle[this.props.state.data.thisHeActive *1]}</h1>
                        <div id="0" onClick={this.openProject} className={dropclss}>{this.props.state.data.thisProject1Ttitle[this.props.state.data.thisHeActive *1]}</div>
                        <div id="1" onClick={this.openProject} className={dropclss}>{this.props.state.data.thisProject2Ttitle[this.props.state.data.thisHeActive *1]}</div>
                        <div id="2" onClick={this.openProject} className={dropclss}>{this.props.state.data.thisProject3Ttitle[this.props.state.data.thisHeActive *1]}</div>
                        <div id="3" onClick={this.openProject} className={dropclss}>{this.props.state.data.thisProject4Ttitle[this.props.state.data.thisHeActive *1]}</div>
                    </div>
                    <div className="list-dropdow">
                          <h1 onClick={this.openAbout}>{this.props.state.data.thisAboutTtitle[this.props.state.data.thisHeActive *1]}</h1>
                    </div>
                    <div className="list-dropdow">
                          <h1 onClick={this.openContact}>{this.props.state.data.thisContactTtitle[this.props.state.data.thisHeActive *1]}</h1>
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
      toggleContact : () => dispatch({type : TOGGLE_CONTACT}),
      changeClassName : (className) => dispatch({type : CLASS_NAME,payload: className}),
      stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
      currentProject : (index) => dispatch({type : CURRENT_PROJECT,payload: index}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(MenuPopUp);