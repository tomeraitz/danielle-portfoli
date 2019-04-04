import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE, STOP_LOOP ,CLASS_NAME, CLASS_NAME_DROP} from '../redux/actions/actions'
import '../styles/navigation.css'
import MenuPopUp from "./MenuPopUp";



class NavBar extends Component {
  constructor(props){
    super()
    this.props = props
  }

  change =async () => {
    await  this.props.changeClassName("home")
    await  this.props.changeclassName(false)
    await  this.props.stopLoop(!this.props.state.data.stopLoop)
    await  this.props.toggle()
  }

  render (){
        return(
                <div className="nav-container" >
                    <div className="logo">Logo</div>
                    <div></div>
                    <div className="menu">
                        <span className="menu-title">Menu</span>
                        <div onClick={this.change} className="menu-bars">
                        {this.props.state.data.toggleClass[+ this.props.state.data.istoggle].map(i =>{
                           return <div className={i} key={i}></div>
                        })}
                        </div>
                    </div>
                    {this.props.state.data.istoggle ? <MenuPopUp /> : null}
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
        toggle : () => dispatch({type : TOGGLE}),
        changeClassName : (className) => dispatch({type : CLASS_NAME,payload: className}),
        stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
        changeclassName : (index) => dispatch({type : CLASS_NAME_DROP,payload: index}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(NavBar);