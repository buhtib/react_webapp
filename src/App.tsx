import React, { Component } from 'react';

import './App.scss';

import AppHeader from './common/header/App-header';
// import AppNav  from './common/nav/App-nav';
import AppFooter from './common/footer/App-footer'


  class App extends Component {
    state = {
        typesOfHeader:'index',
        NavArr:[
            {title:'推荐', path:'all'},
            {title:'视频', path:'video'},
            {title:'热点', path:'news_hot'},
            {title:'社会', path:'news_society'},
            {title:'娱乐', path:'news_entertainment'},
            {title:'军事', path:'news_military'},
            {title:'科技', path:'news_tech'}
        ]
    }

    render(){
        let {typesOfHeader,NavArr} = this.state;

        return (
            <div id="app">
                <AppHeader Header={typesOfHeader}/>
                
                <nav className="menu">

                    <div className="menu_list">
                        {
                            NavArr.map((item, index)=>{
                                return (
                                    <li key={index} className="menu_item">{item.title}</li>
                                )
                            })
                        }
                    </div>

                    <div className="more_btn">
                        <i className="shop hw-jiahao"></i>
                    </div>
                </nav>


                <AppFooter />
            </div>
        )
    }
    
  }

export default App;
