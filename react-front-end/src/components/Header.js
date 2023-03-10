import React from 'react';
import style from './Header.css'
import { useNavigate } from 'react-router-dom';
const Header = ({isLoggedIn,setIsLoggedIn}) => {
    const History=useNavigate()
    const handleLogin=()=>{
        History('/login')
    }
    const handleLogOut=()=>{
        setIsLoggedIn({
            loginState:false,
            userId:'',
            userName:''
        })
        window.alert('Logged Out Successfully')
    }
    return (
        <div className='header'>
            <div className='headerLeft'>
                <div className='logo'>
                    CCB NEWS
                </div>

            </div>
            <div className='headerRight'>
                {isLoggedIn.loginState?<div className='userName'>Welcome {isLoggedIn.userName}</div>:null}
                <div className='LoginContainer'>
                    {
                        isLoggedIn.loginState?<button className='loginStateBtn' onClick={handleLogOut}>LogOut</button>:<button className='loginStateBtn' onClick={handleLogin}>Log In</button>
                    }
                    {/* <button>Login</button> */}
                </div>

            </div>
                
        </div>
    );
};

export default Header;