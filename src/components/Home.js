import React, { Component }  from "react";
import { connect } from "react-redux";
import {SLIDER} from '../redux/actions/actions'
import '../styles/home.css'
import { FaAngleDown } from "react-icons/fa";

class Home extends Component {
  constructor(props){
    super()
    this.props = props
  }

async  componentDidMount() {
    setInterval(async () => {
        this.props.slideImages(this.props.state.data.index)
        this.forceUpdate()
    }, 6000);
  }

  render (){
        return(
                <div className="main" >
                    <div ref="home" 
                         className="home" 
                         style={{backgroundImage: `url(${this.props.state.data.images})`}}>
                         <FaAngleDown className="down"/>
                    </div>
                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
        slideImages : (index) => dispatch({type : SLIDER,payload: index})
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Home);