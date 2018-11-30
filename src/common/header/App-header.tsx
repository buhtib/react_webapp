import React, { Component } from 'react';

import './App-header.scss'
import refreshImg from '../../assets/img/refresh.png'
import emailImg from '../../assets/img/email.png'
import searchImg from '../../assets/img/seach.png'
import header_back from '../../assets/img/header_back.png'

// 定义接口，验证props
interface Props {
    Header: String;
 }

//  首页头部
 let IndexHeader = (
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

//  频道管理的头部
 let addHeader = (
    <div id="app_header">
        <div className="email">
            <img src={header_back} alt=""/>
        </div>

        <h1 className="title">
            <span>频道管理</span>
        </h1>
        
    </div> 
 )

export default function AppHeader(props:Props) {
    return (
        props.Header == 'index' ? IndexHeader : addHeader
    )
}