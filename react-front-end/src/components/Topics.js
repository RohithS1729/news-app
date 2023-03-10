import React from 'react';
import style from './Topics.css'
import {useNavigate} from 'react-router-dom'

const Topics = ({isLoggedIn,setTopic}) => {
    const History=useNavigate()
    const redirctToTopic=(e)=>{
        // setRefresh(state=>!state)
        // setHeadlines([])
        History(`/${e.target.id}`)
        setTopic(window.location.href.split("/").pop())
    }
    return (
        <div className='Topics'>
            <div className='topicsContainer'>
                <div id={'home'} onClick={()=>{
                    // setRefresh(state=>!state)
                    History('/');

                
            
            }} className=''>
                    Home
                </div>
                <div id={'apple'} onClick={redirctToTopic} className=''>
                    Apple
                </div>
                <div id={'tesla'} onClick={redirctToTopic} className=''>
                    Tesla
                </div>
                <div id={'buisness'} onClick={redirctToTopic} className=''>
                    Buisness
                </div>
                <div id={'techcrunch'} onClick={redirctToTopic} className=''>
                    Tech Crunch
                </div>
                <div id={'wallstreet'} onClick={redirctToTopic} className=''>
                    Wall Street
                </div>
                {
                    isLoggedIn.loginState?<div id={'myArticle'} onClick={redirctToTopic} className=''>
                    My Article
                </div>:null
                }
                
            </div>
            
        </div>
    );
};

export default Topics;