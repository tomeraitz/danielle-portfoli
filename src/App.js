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

  loadApp = () => this.props.chngeLoadStatus()

  componentDidMount(){
    this.props.state.data.images.forEach((picture) => {
      const img = new Image();
      img.src = picture.fileName;
  });

  for(let key in this.props.state.projectsData){
    
    if(key == "project"){
     
      for(let i =0; i < this.props.state.projectsData[key].length; i++){
        // console.log("project : ", this.props.state.projectsData[key][i].gallery)
        this.props.state.projectsData[key][i].gallery.forEach((picture) => {
          const img = new Image();
          img.src = picture.fileName;
      });
      }

    }
  }

    setTimeout(this.loadApp,4000);
    // console.log = function() {}
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
