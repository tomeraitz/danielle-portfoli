import React, { Component }  from "react";
import { connect } from "react-redux";
import {SLIDER , SLIDER_LEFT , SLIDER_RIGHT} from '../redux/actions/actions'
import '../styles/home.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

class Home extends Component {
  constructor(props){
    super()
    this.props = props
  }

 componentDidMount() {
    this.slider(false)
  }

  slider = (stop) =>{
    if(stop === true){
        return
    }
    else{
      let nextAt = new Date().getTime() +15000
      this.props.slideImages(this.props.state.data.index)
      this.forceUpdate()
      setTimeout(this.slider, nextAt - new Date().getTime())
    }

  }

  left = () =>{
    this.slider(true)
    this.props.sliderLeft(this.props.state.data.index + 1)
    this.forceUpdate()
  }

  right = () =>{
    this.slider(true)
    this.props.sliderRight(this.props.state.data.index - 1)
    this.forceUpdate()
  }



  render (){
        return(
                <div className="main" >
                    <div ref="home" 
                         className="home" 
                         style={{backgroundImage: `url(${this.props.state.data.images})`}}>
                         <div className="slider-arrows">
                            <FaAngleLeft onClick={this.left} className="left"/>
                            <FaAngleRight onClick={this.right} className="right"/>
                         </div>
                    
                    </div>
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
        slideImages : (index) => dispatch({type : SLIDER,payload: index}),
        sliderLeft : (index) => dispatch({type : SLIDER_LEFT,payload: index}),
        sliderRight : (index) => dispatch({type : SLIDER_RIGHT,payload: index})
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Home);