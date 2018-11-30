import React from 'react'
import  imgLogo   from '../../assets/img/logo.png';
import './App-footer.scss'

export default function AppFooter(){
    return (
        <div id="download">
            <div className="logo-wrapper">
                <img src={imgLogo} alt="logo"/>
                <span>今日头条</span>
            </div>
            <div className="open">打开</div>
        </div>
    )
}