import React, { Component } from 'react';

import './App-header.scss'
import refreshImg from '../../assets/img/refresh.png'
import emailImg from '../../assets/img/email.png'
import searchImg from '../../assets/img/seach.png'

export default function AppHeader() {
    return (
        <div id="app_header">
            <div className="email">
                <div className="circle"></div>
                <img src={emailImg} alt=""/>
            </div>
            <h1 className="title">
                <span>今日头条</span>
                <img src={refreshImg} alt=""/>
            </h1>
            <div className="search">
                <img src={searchImg} alt=""/>
            </div>
        </div>      
    )
}