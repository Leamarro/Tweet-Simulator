import React from "react";
import TwitterLogo from '../../ASSETS/img/twitter-logo.png'
import './Header.css';

export default function Header (){
    return (
        <div className="header">
            <img src= {TwitterLogo} alt="tweet-simulator" />
            <h1>Tweets-Simulator</h1>
        </div>
    )
}