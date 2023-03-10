import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Topics from '../components/Topics';
const Login = ({isLoggedIn,setIsLoggedIn}) => {
    const [userLoginData,setuserLoginData]=useState({
        username:'',
        password:''
    })
    const History=useNavigate()
    async function LoginValidity(){
        let url=`${process.env.REACT_APP_BASE_URL}/login`
        const response = await axios.post(url,userLoginData)
        if(response.data.msg==='logged in'){
            setIsLoggedIn({loginState:true,userId:response.data.userId,userName:response.data.userName})
            History('/')
        }else{
            window.alert("invalid credentials")
        }
    }


    return (
        
        <div className='LoginPage'>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className='loginMainContainer'>
                <div className='leftloginMain'>
                <Topics isLoggedIn={isLoggedIn} setTopic={()=>{}} />

                </div>
                <div className='rightloginMain'>
                    <main className='LoginMain'>
                        <div className='login-welcomeMsg'>
                            <span>Welcome User!</span>
                        </div>
                        <div className='login-container'>
                            <div className='login-heading'>
                                Enter Valid Credentials
                            </div>
                            <div className='login-input-container'>
                                <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    LoginValidity()
                                }} id='loginForm' >
                                    <div className='login-username'>
                                        <label htmlFor='usernameInput'>Username</label>
                                        <input onChange={(e)=>{setuserLoginData({...userLoginData,username:e.target.value})}} id='usernameInput' type={'text'} />
                                        
                                    </div>
                                    <div className='login-username'>
                                        <label htmlFor='passwordInput'>Password</label>
                                        <input onChange={(e)=>{setuserLoginData({...userLoginData,password:e.target.value})}} id='passwordInput' type={'password'} />

                                    </div>
                                    <div className='LoginBtn-container'>
                                        <button  className='LoginBtn'>Login</button>

                                    </div>
                                    <div className='redirect-to-signUp'>
                                        <span>Dont have an account?</span>
                                        <Link className='login-link' to={'/signUp'}>Sign Up for free!!</Link>
                                    </div>


                                </form>

                            </div>

                        </div>
                </main>
                </div>
            </div>
            
        </div>
    );
};

export default Login;