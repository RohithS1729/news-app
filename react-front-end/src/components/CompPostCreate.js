import React from 'react';
import { useNavigate } from 'react-router-dom';
const CompPostCreate = () => {
    const History=useNavigate()
    return (
        <div className='CompRedirectContainer'>
            <div>Create your article!!</div>
            <button onClick={()=>{
                History('/createPost')
            }}>Create</button>
        </div>
    );
};

export default CompPostCreate;