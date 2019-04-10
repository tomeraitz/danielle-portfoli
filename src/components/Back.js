import React, { Component }  from "react";
import { connect } from "react-redux";
import {STOP_LOOP} from '../redux/actions/actions'
import {CURRENT_PROJECT} from '../redux/actions/projectsActions'
import '../styles/projects.css'
import { FaArrowLeft } from "react-icons/fa";
 

class Back extends Component {
  constructor(props){
    super()
    this.props = props
  }

  closeProject =async () => {
    await  this.props.stopLoop(false)
    await this.props.currentProject(-1)
  } 

  render (){
        return(
                <div className="project-back" onClick={this.closeProject}>
                    <FaArrowLeft /><span>Back</span>
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
            stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
            currentProject : (index) => dispatch({type : CURRENT_PROJECT,payload: index}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Back);