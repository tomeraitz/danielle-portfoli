import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE, STOP_LOOP} from '../redux/actions/actions'
import {CURRENT_PROJECT} from '../redux/actions/projectsActions'
import '../styles/projects.css'
import { FaArrowLeft } from "react-icons/fa";
 

class Projects extends Component {
  constructor(props){
    super()
    this.props = props
  }

  componentDidMount(){
        this.props.toggle()
  }

  closeProject =async () => {
    await  this.props.stopLoop(false)
    await this.props.currentProject(-1)
  } 

  render (){
        let project = this.props.state.projectsData.project[this.props.state.projectsData.currentProject]
        console.log(project)
        return(
                <div className="projects" >
                  <div className="main-Project" style={{backgroundImage :`url(${project.mainImage})` }}>
                    <div></div>
                    <div className="project-details">
                        <h1>{project.title}</h1>
                        <h3>{project.subTitle}</h3>
                        <hr></hr>
                    </div>
                  </div>
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
            toggle : () => dispatch({type : TOGGLE}),
            stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
            currentProject : (index) => dispatch({type : CURRENT_PROJECT,payload: index}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Projects);