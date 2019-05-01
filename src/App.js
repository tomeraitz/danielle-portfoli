import React, { Component } from 'react';
import { connect } from "react-redux";
import {LOADING_PAGE} from './redux/actions/actions'
import Home from './components/Home';
import NavBar from './components/NavBar';
import './styles/home.css'
import Loading from './components/Loading';


class App extends Component {
  constructor(props){
    super()
    this.props = props
  }

  loadApp = () => this.props.chngeLoadStatus()

  componentDidMount(){
    setTimeout(this.loadApp,4000)
  }

  render() {
    if(this.props.state.data.isloaded){
      return (
        <div className="App">
          <div className="main">
            <NavBar />
            <Home />
          </div>
        </div>
      );
    }
    else{
      return <Loading />
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
