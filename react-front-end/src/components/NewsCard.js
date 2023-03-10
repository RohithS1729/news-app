import React from 'react';
import style from './NewsCard.css'
import { useNavigate } from 'react-router-dom';

const NewsCard = ({setArticle,newsData}) => {
    const History=useNavigate()
    const redirectToArticle=(val)=>{
        History('/article')
        setArticle(val)

    }
    return (
        <div className='CardContainer' onClick={()=>{redirectToArticle(newsData)}}>
            
            
                <div className='imageDiv'>
                     <img className='imageTag' src={newsData.urlToImage} alt=" related to news"/>
                </div>
            

            <div className='detailsDiv'>
                <div className='title'>{newsData.title?newsData.title:'no title'}</div>
                <div className='source'>Source: {newsData.source.name?newsData.source.name:'Anonymous'}</div>
                <div className='author'>Author: {newsData.author?newsData.author:'Anonymous'}</div>
            </div>
        </div>
    );
};

export default NewsCard;