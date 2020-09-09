import React, { Component ,lazy, Suspense} from 'react';
import { connect } from "react-redux";
import {LOADING_PAGE} from './redux/actions/actions'
import Loading from './components/Loading';
import './styles/home.css'
import { IoIosPhoneLandscape } from "react-icons/io";

const Main = lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=>resolve(import('./components/Main')),5000)
  });
});

class App extends Component {
  constructor(props){
    super()
    this.props = props;
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


