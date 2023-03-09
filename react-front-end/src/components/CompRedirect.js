import React from 'react';
import { useNavigate } from 'react-router-dom';
const CompRedirect = () => {
    const History=useNavigate()
    return (


                <div className='compPostCreateContainer'>
                <div>Want to create your own News Update?!! SignUp Now</div>
                <button onClick={()=>{
                    History('/signUp')
                }}>SignUp</button>
            </div>
    );
};

export default CompRedirect;