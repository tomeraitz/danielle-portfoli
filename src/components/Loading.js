import React from 'react';
import logo from '../images/logo.png'
import '../styles/loading.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Loading = function () {
    return (
            <div className="loading"  id="app-loading">
                <LazyLoadImage alt="logo" src={logo} width="100rem" height="100rem" className="bounce" />
                <span id="loading-text">Now Loading...</span>
            </div>
        )
}

export default Loading;
