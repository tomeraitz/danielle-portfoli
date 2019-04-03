import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE} from '../redux/actions/actions'
import '../styles/navigation.css'
import MenuPopUp from "./MenuPopUp";



class NavBar extends Component {
  constructor(props){
    super()
    this.props = props
  }

  change = () => {
      this.props.toggle()
      this.forceUpdate()
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
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(NavBar);