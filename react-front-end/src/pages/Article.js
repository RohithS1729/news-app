import React, { useEffect, useState } from 'react';
import ArticleBody from '../components/ArticleBody';
import Footer from '../components/Footer';
import Header from '../components/Header';
import style from './Article.css'
const Article = ({article}) => {
    console.log(article)
    return (
        <div className='articlePage'>
            <Header/>
            <main>
                <ArticleBody article={article}/>

            </main>
            <Footer/>
           
        </div>
    );
};

export default Article;