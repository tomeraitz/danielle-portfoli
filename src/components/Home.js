import React, { Component }  from "react";
import { connect } from "react-redux";
import {SLIDER , SLIDER_LEFT , SLIDER_RIGHT ,CLASS_NAME, STOP_LOOP} from '../redux/actions/actions'
import '../styles/home.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";



class Home extends Component {
  constructor(props){
    super()
    this.props = props
  }

 componentDidMount() {
    this.props.stopLoop(false)
    this.slider()
  }

  slider = () =>{
    if(this.props.state.data.stopLoop === true){
      let nextAt = new Date().getTime() +500
      setTimeout(this.slider, nextAt - new Date().getTime())
    }
    else{
      let nextAt = new Date().getTime() +7500
      this.props.slideImages(this.props.state.data.index)
      this.props.changeClassName("cf3FadeInOut home")
      setTimeout(this.slider, nextAt - new Date().getTime())
    }

  }

  left = () =>{
    this.slideButton(1)
  }

  right = () =>{
    this.slideButton(2)
  }

  slideButton = (index) =>{
    this.props.stopLoop(true)
    this.props.changeClassName("home")
    index === 1 ?  this.props.sliderLeft(this.props.state.data.index +1):  this.props.sliderRight(this.props.state.data.index -1)
    this.props.stopLoop(false)
  }

  render (){
        return(
                <div ref="home" className="home" >
                  {this.props.state.data.images.map((image , index) =>{
                      if(index === this.props.state.data.index){
                       return <div className="fade-in" key={image}>
                                <img alt="slider" id="main-slider"src={image} ></img>
                              </div>
                      }
                      else{
                        return <div className="fade-out" key={image}>
                                  <img alt="slider" id="main-slider"src={image} ></img>
                                </div>
                      }
                  })}
                  {!this.props.state.data.isToggleAbout && !this.props.state.data.isToggleContact ?  
                      <div className="slider-arrows">
                        <FaAngleLeft onClick={this.left} className="left"/>
                        <FaAngleRight onClick={this.right} className="right"/>
                      </div> : null}
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
        slideImages : (index) => dispatch({type : SLIDER,payload: index}),
        sliderLeft : (index) => dispatch({type : SLIDER_LEFT,payload: index}),
        sliderRight : (index) => dispatch({type : SLIDER_RIGHT,payload: index}),
        changeClassName : (className) => dispatch({type : CLASS_NAME,payload: className}),
        stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
        
        
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Home);