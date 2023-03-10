import React from 'react';
import style from './Header.css'
import { useNavigate } from 'react-router-dom';
import Topics from './Topics';
const Header = ({isLoggedIn,setIsLoggedIn,setTopic}) => {
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
        <div>
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
            <div className='headerSmall'>
                <div className='topHeader'>
                <div className='headerLeft'>
                        <div className='logo'>
                            CCB NEWS
                        </div>

                </div>
                <div className='headerRight'>
                    <div className='LoginContainer'>
                        {
                            isLoggedIn.loginState?<button className='loginStateBtn' onClick={handleLogOut}>LogOut</button>:<button className='loginStateBtn' onClick={handleLogin}>Log In</button>
                        }
                       
                    </div>
                <div className="navbar">
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Topics isLoggedIn={isLoggedIn} setTopic={setTopic} />

                        </div>
                    </div>
                </div>
                    {/* {isLoggedIn.loginState?<div className='userName'>Welcome {isLoggedIn.userName}</div>:null}
                    <div className='LoginContainer'>
                        {
                            isLoggedIn.loginState?<button className='loginStateBtn' onClick={handleLogOut}>LogOut</button>:<button className='loginStateBtn' onClick={handleLogin}>Log In</button>
                        }
                       
                    </div> */}

                </div>
                </div>
                <div className='bottomHeader'>
                        {isLoggedIn.loginState?<div className='userName'>Welcome {isLoggedIn.userName}</div>:null}

                </div>


            </div>
        </div>
    );
};

export default Header;