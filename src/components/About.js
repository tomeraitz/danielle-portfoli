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
                        <h1>{this.props.state.data.thisAboutPageTitle[this.props.state.data.thisHeActive *1]}</h1>
                        <p className="job-title">{this.props.state.data.thisAboutPageSubTitleBig1[this.props.state.data.thisHeActive *1]}</p>
                        <p className="job-sub-title">{this.props.state.data.thisAboutPageSubTitle2[this.props.state.data.thisHeActive *1]}</p>
                        <ul>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes1[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes2[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes3[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes4[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes5[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes6[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes7[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                        </ul>
                       
                      
                        <p className="job-sub-title">{this.props.state.data.thisAboutPageSubTitle3[this.props.state.data.thisHeActive *1]}</p>
                        <ul>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes8[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes9[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes10[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes11[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                        </ul>

                        <p className="job-title">{this.props.state.data.thisAboutPageSubTitleBig2[this.props.state.data.thisHeActive *1]}</p>
                        <p className="job-sub-title">{this.props.state.data.thisAboutPageSubTitle4[this.props.state.data.thisHeActive *1]}</p>

                        <ul>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes12[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes13[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                        </ul>

                        <p className="job-sub-title">{this.props.state.data.thisAboutPageSubTitle5[this.props.state.data.thisHeActive *1]}</p>
                        <ul>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes14[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                        </ul>


                        <p className="job-title">{this.props.state.data.thisAboutPageSubTitleBig3[this.props.state.data.thisHeActive *1]}</p>
                        <ul>
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes15[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes16[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes17[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                          
                          <li className="job-des">{this.props.state.data.thisAboutPageJobDes18[this.props.state.data.thisHeActive *1]}</li>
                          <br></br>

                        </ul>

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