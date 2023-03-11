import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Topics from '../components/Topics';
import Body from '../components/Body';
import Footer from '../components/Footer';
import loading from '../images/loading.gif'
import styles from './News.css'
import CompPostCreate from '../components/CompPostCreate';
import CompRedirect from '../components/CompRedirect';


const News = ({isLoggedIn,setArticle,setIsLoggedIn}) => {
    const [topic,setTopic]=useState('')

    const [pageNumber,setPageNumber]=useState(1)
    const[headlines,setHeadlines]=useState([])



    useEffect(()=>{
        setTopic(window.location.href.split("/").pop())


    },[])
    useEffect(()=>{
        setHeadlines([])
    },[topic])
    useEffect(()=>{
        if(topic.length>0){
            async function getData(){

                
                // let url=`${process.env.REACT_APP_BASE_URL}/home?limit=5&skip=${pageNumber}`
                let url=`${process.env.REACT_APP_BASE_URL}/topic?topic=${topic}&limit=5&skip=${pageNumber}`

                let response = await axios.get(url)
                if(Array.isArray(response.data)){
                    setHeadlines(data=>[...data,...response.data])
    
                }else{
                    window.alert('failed to connect to the server ')
    
                }
            }

            getData() 
        }



        
    },[pageNumber,topic])

    async function handleScrollEvent(){

        if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight){
            
            setPageNumber(state=>state+1)
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollEvent)
    },[])


    return (
        <div className='newsPage'>
            <Header setTopic={setTopic} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <main className='newsPageMain'> 
                <div className='newsPageLeft'>
                    <Topics isLoggedIn={isLoggedIn}  setTopic={setTopic}/>
                    <div className='createContainer'>
                        {isLoggedIn.loginState?<CompPostCreate/>:<CompRedirect/>  }

                    </div>
                </div>
                <div className='newsPageRight'>
                <div className='createContainer createContainerSmall'>
                        {isLoggedIn.loginState?<CompPostCreate/>:<CompRedirect/>  }

                    </div>
                    {headlines.length>0?
                    <Body setArticle={setArticle} data={headlines}/>:
                    <div id='loading'>
                        <img  src={loading} alt="loading ..." />

                    </div>
                    
                    }

                </div>
            </main>

        </div>
    );
};

export default News;
