import React, { useEffect, useState } from 'react';
import style from './PostCreation.css'
import axios from 'axios'
import CompFormCreation from '../components/CompFormCreation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Topics from '../components/Topics';

const PostCreation = ({isLoggedIn,setArticle,setIsLoggedIn}) => {


    return (
        <div className='PostCreation'>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <main className='postCreationMain'>
                <div className='leftPostCreation'>
                    <Topics isLoggedIn={isLoggedIn} setTopic={()=>{}} />

                </div>
                <div className='RightPostCreation'>
                    <CompFormCreation isLoggedIn={isLoggedIn}/>
                    
                </div>
            </main>
            {/* <Footer/> */}
        </div>
    );
};

export default PostCreation;