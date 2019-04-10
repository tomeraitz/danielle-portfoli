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
        return(
                <div className="projects" >
                    <div className="project-row-1">
                        <h1 className="project-mainTitle">{project.title}</h1>
                        <h3 className="project-subTitle">{project.subTitle}</h3>
                    </div>
                    <div className="project-row-2">
                        <img className="main-image-project" alt="main image project" src={project.mainImage} />
                        <div className="discription">
                            <h2>Description</h2>
                            <p className="project-p">{project.description}</p>
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