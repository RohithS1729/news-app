import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Topics from '../components/Topics';
import style from './MyArticle.css'
import axios from 'axios'
import Body from '../components/Body';
import loading from '../images/loading.gif'


const MyArticle = ({isLoggedIn,setArticle,setIsLoggedIn}) => {
    const[headlines,setHeadlines]=useState([])
    const[pageNumber,setPageNumber]=useState(1)

    useEffect(()=>{
   
        async function getData(){
            let url=`${process.env.REACT_APP_BASE_URL}/createPost?userId=640a15dc53e6aea4431758fe`
            // let url=`${process.env.REACT_APP_BASE_URL}/createPost?limit=5&skip=${pageNumber}&userId=${isLoggedIn.userId}`
            let response = await axios.get(url)
            console.log((response.data))
            if(Array.isArray(response.data)){
                setHeadlines(data=>[...data,...response.data])

            }else{
                window.alert('failed to connect to the server ')

            }
            // if(response.data.msg.indexOf('errorAxiosError') !== -1){
            // }else{
            // }
        }
        getData()       


        
    },[])



    async function handleScrollEvent(){

        if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight){
            
            setPageNumber(state=>state+1)
        }

    }

    // useEffect(()=>{
    //     window.addEventListener('scroll',handleScrollEvent)
    // },[])

    return (    
        <div className='MyArticlePage'>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <main className='mainMyarticle'>
                <div className='leftMyarticle'>
                    <Topics isLoggedIn={isLoggedIn} setTopic={()=>{}} />
                </div>
                <div className='rightMyarticle'>
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

export default MyArticle;