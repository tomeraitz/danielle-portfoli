import React, { Component }  from "react";
import { connect } from "react-redux";
import {TOGGLE_CONTACT, STOP_LOOP} from '../redux/actions/actions'
import {INPUT_CHANGE, sendToMail, FLIP} from '../redux/actions/formAction'
import '../styles/about.css'
import '../styles/form.css'
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


 

class Contact extends Component {
  constructor(props){
    super()
    this.props = props
  }

  closeContact = () =>  {
      this.props.stopLoop(false)
      this.props.toggleContact()
  }

  handleFields = (e) =>{
      let inputDetilas = {name : e.target.name , value : e.target.value}
      this.props.changeInput(inputDetilas)
  }

  checkMailStatus = () =>{
      this.props.state.form.isSent ? console.log("sent") : console.log("not sent")
      this.props.flip()
  }

  submit =async () =>{
        let mail = {
            "Username" : "tomerraitzservice",
            "Password" : "RaitzService19",
            "Subject" : "Mail from danielle portfolio",
            "Body" : `<p>From : ${this.props.state.form.name}</p><p>Email : ${this.props.state.form.email}</p><p>Phone : ${this.props.state.form.phone}</p><p>Message : ${this.props.state.form.message}</p>`,
            "AddAddress" : "tomeraitz1@gmail.com"
        }
        // await   this.props.sendMail(mail)
        await this.props.flip();
        setTimeout(this.checkMailStatus, 5000)
  }

  render (){
        let form = this.props.state.form
        return(
                <div className="about" >
                    <form className="form">
                        <h1 className="form-title">Contact Me</h1>
                        <div className="form-description">If you want to contact me, 
                                                        send me your details by filling up the form below or 
                                                        send an email to danielle571990@gmail.com
                        </div>
                        
                        <div className={form.formClassName}>
                       
                            <input className={form.InputSmallclassName} 
                                type="text" id="name" 
                                placeholder="Your Name" 
                                name="name" 
                                value={form.name} 
                                onChange={this.handleFields} 
                            />

                            <input className={form.InputSmallclassName} 
                                type="email" 
                                id="email" 
                                placeholder="Your Email" 
                                name="email" 
                                value={form.email}  
                                onChange={this.handleFields} 
                            />

                            <input className={form.InputSmallclassName} 
                                    type="number" 
                                    id="phone" 
                                    placeholder="Your Phone" 
                                    name="phone" 
                                    value={form.phone}   
                                    onChange={this.handleFields} 
                            />

                            <textarea className={form.InputBigclassName} 
                                    type="text"  
                                    name="message" 
                                    placeholder="Message" 
                                    id="message" 
                                    value={form.message}  
                                    onChange={this.handleFields}
                                    >
                            </textarea>

                            <div className={form.InputButtonsclassName}>
                                <div className="back form-buttons" onClick={this.submit} style={{display: form.display}}>
                                    <IoIosSend />
                                    <span>submit</span>
                                </div>
                                
                                <div className="back form-buttons" onClick={this.closeContact} style={{display: form.display}}>
                                    <FaArrowLeft />
                                    <span>Cancel</span>
                                </div>
                            </div>
                        </div>
                        {form.formClassName === "form-details flip-back" ? 
                        <div className="back-card">

                        </div> : null}
                    </form>

                </div>
            )
    }

  }

  function mapDispatchToProps(dispatch) {
    return({
        toggleContact : () => dispatch({type : TOGGLE_CONTACT}),
        stopLoop : (isStop) => dispatch({type : STOP_LOOP,payload: isStop}),
        changeInput : (inputDetilas) => dispatch({type : INPUT_CHANGE,payload: inputDetilas}),
        sendMail : (mail) =>  {dispatch(sendToMail(mail))},
        flip: () => dispatch({type : FLIP}),
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(Contact);