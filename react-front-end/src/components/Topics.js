import React from 'react';
import style from './Topics.css'
import {useNavigate} from 'react-router-dom'

const Topics = () => {
    const History=useNavigate()
    const redirctToTopic=(e)=>{
        History(`/${e.target.id}`)
    }
    return (
        <div className='Topics'>
            <div className='topicsContainer'>
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
            </div>
            
        </div>
    );
};

export default Topics;