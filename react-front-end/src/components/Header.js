import React from 'react';
import style from './Header.css'
import { useNavigate } from 'react-router-dom';
const Header = ({isLoggedIn,setIsLoggedIn}) => {
    const History=useNavigate()
    const handleLogin=()=>{
        History('/login')
    }
    const handleLogOut=()=>{

    }
    return (
        <div className='header'>
            <div className='headerLeft'>
                <div>
                    Logo
                </div>

            </div>
            <div className='headerRight'>
                <div className='LoginContainer'>
                    {
                        isLoggedIn.loginState?<button onClick={handleLogOut}>LogOut</button>:<button onClick={handleLogin}>Log In</button>
                    }
                    {/* <button>Login</button> */}
                </div>

            </div>
                
        </div>
    );
};

export default Header;