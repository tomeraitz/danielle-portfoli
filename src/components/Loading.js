import React from 'react';
import logo from '../images/logo.png'
import '../styles/loading.css'


const Loading = function () {
    return (
            <div className="loading"  id="app-loading">
                <img alt="logo" src={logo} width="100rem" height="100rem" className="bounce"></img>
                <span id="loading-text">Now Loading...</span>
            </div>
        )
}

export default Loading;
