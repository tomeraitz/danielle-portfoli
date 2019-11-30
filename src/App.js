import React, { Component } from 'react';
import { connect } from "react-redux";
import {LOADING_PAGE} from './redux/actions/actions'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './styles/home.css'
import Loading from './components/Loading';
import { IoIosPhoneLandscape } from "react-icons/io";

class App extends Component {
  constructor(props){
    super()
    this.props = props
  }

  componentDidMount(){
    setTimeout(this.props.chngeLoadStatus , 3000)
  }

  render() {
    if(this.props.state.data.isloaded){
      return (
        <div>
          <div className="App" id="app" >
            <div className="main">
              <NavBar />
              <Home />
            </div>
          </div>
          <div id="rotate-app">
              <h1>Plese rotate Your device</h1>
              <IoIosPhoneLandscape className="phone-rotate"/>
          </div>
        </div>
      );
    }
    else{
      return (<div>
          <Loading/>
          <div id="rotate-app">
            <h1>Plese rotate Your device</h1>
            <IoIosPhoneLandscape className="phone-rotate"/>
          </div>
      </div>)
    }
    
  }
}
  function mapDispatchToProps(dispatch) {
    return({
      chngeLoadStatus : () => dispatch({type : LOADING_PAGE}),
        
        
    })
  }

  function mapStateToProps(store){
    return {
        state : store
    }
}

  export default connect(mapStateToProps , mapDispatchToProps)(App);
