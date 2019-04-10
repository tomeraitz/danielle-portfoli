import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE, STOP_LOOP ,CLASS_NAME, CLASS_NAME_DROP} from '../redux/actions/actions'
import {CURRENT_PROJECT} from '../redux/actions/projectsActions'
import '../styles/navigation.css'
import MenuPopUp from "./MenuPopUp";
import About from "./About";
import Projects from "./projects";
import logo from '../images/logo.png'
import Back from "./Back";


class NavBar extends Component {
  constructor(props){
    super()
    this.props = props
  }

  change =async () => {
    await  this.props.changeClassName("home")
    await  this.props.changeclassNameOfDrop(false)
    await  this.props.currentProject(-1)
    await  this.props.toggle()
    this.props.state.data.istoggle ? 
    await  this.props.stopLoop(true) : await  this.props.stopLoop(false)
    
  }

  render (){
        return(
                <div className="nav-container" >
                    <div className="logo">
                      <img alt="logo" src={logo} width="100%" height="100%"></img></div>
                      {this.props.state.projectsData.currentProject !== -1 ? <Back />  : <div></div>}
                    <div className="menu">
                        <span className="menu-title">Menu</span>
                        <div onClick={this.change} className="menu-bars">
                          {this.props.state.data.toggleClass[+ this.props.state.data.istoggle].map(i =>{
                            if(this.props.state.data.counter > 0){
                              return <div className={i} key={i}></div>
                            }
                            else{
                              return <div className="unloaded-burger" key={i}></div>

                            }
                          })}
                        </div>
                    </div>
                    {this.props.state.data.istoggle ? <MenuPopUp /> : null}
                    {this.props.state.data.isToggleAbout ? <About /> : null}
                    {this.props.state.projectsData.currentProject !== -1 ? <Projects />  : null}
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
        toggle : () => dispatch({type : TOGGLE}),
        changeClassName : (className) => dispatch({type : CLASS_NAME,payload: className}),
        stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
        changeclassNameOfDrop : (index) => dispatch({type : CLASS_NAME_DROP,payload: index}),
        currentProject : (index) => dispatch({type : CURRENT_PROJECT,payload: index}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(NavBar);