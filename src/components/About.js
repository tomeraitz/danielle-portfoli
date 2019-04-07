import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE_ABOUT, STOP_LOOP} from '../redux/actions/actions'
import '../styles/about.css'
import { FaArrowLeft } from "react-icons/fa";
 

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
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                            Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                            No mea tale salutandi. Inani atomorum constituam his no, 
                            an mea probatus adipisci.
                        </p>
                        <div className="back" onClick={this.closeAbout}><FaArrowLeft /><span>Back</span></div>
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