import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE_ABOUT, STOP_LOOP} from '../redux/actions/actions'
import '../styles/about.css'
import { FaArrowLeft } from "react-icons/fa";
// import logger from '../scripts/consoleController'
 

class About extends Component {
  constructor(props){
    super()
    this.props = props
  }

  closeAbout = () =>  {
      this.props.stopLoop(false)
      this.props.toggleAbout()
  }
    
  render (){
        return(
                <div className="about" >
                    <div className="about-container">
                        <h1>{this.props.state.data.thisAboutPageTitle[this.props.state.data.thisHeActive *1]}</h1>
                        <p>{this.props.state.data.thisAboutPageDes[this.props.state.data.thisHeActive *1]}
                        </p>
                        <div className="back" onClick={this.closeAbout}><FaArrowLeft /><span>{this.props.state.data.thisBackTtitle[this.props.state.data.thisHeActive *1]}</span></div>
                    </div>
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
        toggleAbout : () => dispatch({type : TOGGLE_ABOUT}),
        stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(About);