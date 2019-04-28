import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE, STOP_LOOP} from '../redux/actions/actions'
import {CURRENT_PROJECT, CHANGE_IMAGE, CHANGE_IMAGE_INDEX_RIGHT, CHANGE_IMAGE_INDEX_LEFT} from '../redux/actions/projectsActions'
import '../styles/projects.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
 

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

  changePhoto = (e) =>{
    let imageDetails = {index : e.target.id , name : e.target.src};
    this.props.changeCurrentImage(imageDetails);

  }

  moveLeft = () => this.props.changeImageIndexLeft(this.props.state.projectsData.currentProject);

  moveRight = () => this.props.changeImageIndexRight(this.props.state.projectsData.currentProject);

  render (){
        let project = this.props.state.projectsData.project[this.props.state.projectsData.currentProject]
        return(
                <div className="projects" >
                  <div className="main-Project" style={{backgroundImage :`url(${project.mainImage})` }}>
                    <div></div>
                    <div className="project-details">
                        <h1 className="project-main-titlte">{project.title}</h1>
                        <h3 className="project-sub-titlte">{project.subTitle}</h3>
                        <hr></hr>
                        <p className="project-main-p">{project.description}</p>
                    </div>
                  </div>
                    <div className="project-gallery">
                      {project.gallery.length > 3 ? <FaAngleLeft className="left active-arrow" onClick={this.moveLeft}/> : <FaAngleLeft className="left hiedden-arrow"/>}
                      
                          {project.gallery.map((name,index) =>{
                            if(index <= project.indexOfImages + 2 && index >= project.indexOfImages){
                              return <img key={index} id={this.props.state.projectsData.currentProject} className={project.className} alt="project photos" width="25%" height="80%" src={name} onClick={this.changePhoto}/>
                            }
                            else{
                              return null;
                            }
                              
                          })}
                          {project.gallery.length > 3 ? <FaAngleRight className="right active-arrow" onClick={this.moveRight}/> : <FaAngleRight className="right hiedden-arrow"/>}
                        
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
            changeCurrentImage : (imageDetails) => dispatch({type : CHANGE_IMAGE,payload: imageDetails}),
            changeImageIndexRight : (index) => dispatch({type : CHANGE_IMAGE_INDEX_RIGHT,payload: index}),
            changeImageIndexLeft : (index) => dispatch({type : CHANGE_IMAGE_INDEX_LEFT,payload: index}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Projects);