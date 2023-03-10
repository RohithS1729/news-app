import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Comp.css'

const CompPostCreate = () => {
    const History=useNavigate()
    return (
        <div className='CompRedirectContainer'>
            <div>Create your article!!</div>
            <div className='btnRedirectLogin'>
                <button className='loginStateBtn' onClick={()=>{
                    History('/createPost')
                }}>Create</button>
            </div>
        </div>
    );
};

export default CompPostCreate;