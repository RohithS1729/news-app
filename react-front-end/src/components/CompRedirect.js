import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Comp.css'

const CompRedirect = () => {
    const History=useNavigate()
    return (


            <div className='compPostCreateContainer'>
                <div >Want to create your own News Update?!! Login Now</div>
                <div className='btnRedirectLogin'>
                    <button className='loginStateBtn' onClick={()=>{
                        History('/login')
                    }}>Login</button>

                </div>
            </div>
    );
};

export default CompRedirect;