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

  loadImage = (picture, cb) =>{
    console.log(" picture : ", picture)
    const img = new Image();
    img.setAttribute("src", `${picture}`);
    cb();
  }

  daynimiceLoadind = (index, pictureArray, maxIndex, cb =undefined) =>{
      if(index > maxIndex -1){
  return
      }
      else{
        this.loadImage(pictureArray[index], ()=>{
          index++
          this.daynimiceLoadind(index, pictureArray,  maxIndex)
        });
      }
  }



  async loadMainImges(cb){
      let imagesArray = [];
      this.props.state.data.images.forEach((picture) => {
        imagesArray.push(picture)
    });

   await this.daynimiceLoadind(0, imagesArray, this.props.state.data.images.length)
   await cb();
  }

  async loadProjectImages(cb){
    let imagesArray = [];
    let maxIndex = 0
    for(let key in this.props.state.projectsData){
      if(key == "project"){
        maxIndex = this.props.state.projectsData[key].length;
    
        for(let i =0; i < this.props.state.projectsData[key].length; i++){
          this.props.state.projectsData[key][i].gallery.forEach((picture) => {
            imagesArray.push(picture)
        });
        }
      }
    }

  await  this.daynimiceLoadind(0, imagesArray, maxIndex)
  await cb();
  }

  componentDidMount(){
    console.log("before  this.loadMainImges")
   this.loadMainImges(()=>{
    console.log("before  this.loadProjectImages")
    this.loadProjectImages(()=>{
      setTimeout(this.loadApp, 4000)
    });
   });
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
