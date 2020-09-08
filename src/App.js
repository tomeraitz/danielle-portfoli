import React, { Component ,lazy, Suspense} from 'react';
import { connect } from "react-redux";
import {LOADING_PAGE} from './redux/actions/actions'
import Loading from './components/Loading';
import './styles/home.css'
import { IoIosPhoneLandscape } from "react-icons/io";
var completeLoadImages = false;

const Main = lazy(() => {
  return new Promise(resolve => {
    setTimeout(isCompleteLoad, 1000, resolve)
  });
});

const isCompleteLoad = (resolve) =>{
  if(completeLoadImages){
    return resolve(import('./components/Main'));
  } 
  else{
    setTimeout(isCompleteLoad, 1000, resolve)
  }
}

class App extends Component {
  constructor(props){
    super()
    this.props = props;
  }

  componentDidMount(){
    let imageArray = [...this.props.state.data.images]
    this.props.state.projectsData.project.forEach((project)=>{
    project.gallery.forEach((picture) => {
      imageArray.push(picture)
    });
  })
  this.loadImage(imageArray)
  }

  loadImage = (array, i=0) =>{
    if(i === array.length){
      console.log("finished!")
      completeLoadImages = true;
      return
    }
    else{
      const img = new Image();
      img.src = array[i];
      window[array[i]] = img;
      this.loadImage(array, i + 1)
    }
  }
  render() {
    return (
      <div>
        <Suspense fallback={
        <div>
          <Loading/>
          <div id="rotate-app">
            <h1>Plese rotate Your device</h1>
            <IoIosPhoneLandscape className="phone-rotate"/>
          </div>
        </div>}>
          <Main></Main>
        </Suspense>
       </div>
    )
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


