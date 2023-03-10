import React, { useEffect, useState } from 'react';
import ArticleBody from '../components/ArticleBody';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Topics from '../components/Topics';
import style from './Article.css'
const Article = ({setIsLoggedIn,isLoggedIn,article}) => {
    return (
        <div className='articlePage'>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <main className='articleMain'>
                <div className='articleMainLeft'>
                    <Topics isLoggedIn={isLoggedIn} setTopic={()=>{}} />
                </div>
                <div className='articleMainRight'>
                    <ArticleBody article={article}/>
                </div>

            </main>
            <Footer/>
           
        </div>
    );
};

export default Article;