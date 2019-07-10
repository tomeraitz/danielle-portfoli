import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE, STOP_LOOP} from '../redux/actions/actions'
import {CURRENT_PROJECT, CHANGE_IMAGE, CHANGE_IMAGE_INDEX_RIGHT, CHANGE_IMAGE_INDEX_LEFT, CHANGE_MENUE ,OPEN_POPUP} from '../redux/actions/projectsActions'
import '../styles/projects.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { TiZoomInOutline } from "react-icons/ti";

 

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

  openPopUp = () => this.props.openPopUp(true)

  closePopUp = () => this.props.openPopUp(false)

  changeMenu = () => {
    this.props.changeMenu(!this.props.state.projectsData.isToggalRightOrLeft)
  }
  

  render (){
        let project = this.props.state.projectsData.project[this.props.state.projectsData.currentProject]
        return(
                <div className="projects" >
                  {this.props.state.projectsData.popUpToggal ?
                  <div className="pop-up" onClick={this.closePopUp}>
                    <img src={project.mainImage} width="100%" height="100%" />
                    <IoIosClose className="close-pop-up" />
                  </div> : null }
                  <div className="main-Project">
                  <div  onClick={this.openPopUp}>
                      <TiZoomInOutline className="zoom-in" />
                    </div>
                  <img src={project.mainImage} id="main-image-slider"/>
                    <div className={this.props.state.projectsData.clssButtonnMenu} onClick={this.changeMenu}>
                    {this.props.state.projectsData.arrowDeriction === "right" ?
                      <FaAngleRight className="right small-menu-right" />: <FaAngleLeft className="left small-menu-right" />}
                    </div>
                    <div className={this.props.state.projectsData.clssDescriptionMenu}>
                        <h1 className="project-main-titlte">{project.title[this.props.state.data.thisHeActive *1]}</h1>
                        <h3 className="project-sub-titlte">{project.subTitle[this.props.state.data.thisHeActive *1]}</h3>
                        <hr></hr>
                        <p className="project-main-p">{project.description[this.props.state.data.thisHeActive *1]}</p>
          
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
            changeMenu: (isRight) => dispatch({type : CHANGE_MENUE,payload: isRight}),
            openPopUp: (isPopUp) => dispatch({type : OPEN_POPUP,payload: isPopUp}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Projects);