import axios from 'axios';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Topics from '../components/Topics';
import style from './SignUp.css'


const SignUp = ({isLoggedIn,setIsLoggedIn}) => {
    const [userData,setuserData]=useState({
        username:"",
        password:"",
        confirmPassword:"",
        email:"",
        role:''
    })

    async function SignUp(){
        // const url='http://127.0.0.1:8080/signUp'
        let url=`${process.env.REACT_APP_BASE_URL}/signUp`


        const response=await axios.post(url,userData)
    }
    return (
        <div className='signUpPage'>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <div className='signUpMainContianer'>
                <div className='leftSignUp'>
                    <Topics isLoggedIn={isLoggedIn} setTopic={()=>{}} />
                </div >
                <div className='rightSignUp'>
                    <main className='SignUpMain'>
                    <div className='SignContainer'>
                        <div className='SignHeading'>
                            Sign Up For Free!!!
                        </div>
                        <div className='SignInputContainer'>

                            <form onSubmit={
                                (e)=>{
                                    e.preventDefault()
                                    SignUp()
                                }
                            }  >
                                <div>
                                    <label htmlFor='usernameInputSignUp'>Username</label>
                                    <input onChange={(e)=>{setuserData({...userData,username:e.target.value})}} id='usernameInputSignUp' type={'text'} />
                                    
                                </div>

                                <div>
                                    <label htmlFor='passwordInputSignUp'>Password</label>
                                    <input onChange={(e)=>{setuserData({...userData,password:e.target.value})}} id='passwordInputSignUp' type={'password'} />

                                </div>

                                <div>
                                    <label htmlFor='confirmpasswordInputSignUp'>Confirm Password</label>
                                    <input onChange={(e)=>{setuserData({...userData,confirmPassword:e.target.value})}} id='confirmpasswordInputSignUp' type={'password'} />

                                </div>

                                <div>
                                    <label htmlFor='emailInputSignUp'>e-mail</label>
                                    <input onChange={(e)=>{setuserData({...userData,email:e.target.value})}} id='emailInputSignUp' type={'email'}/>

                                </div>

                                <div className='signup-role-container'>
                                    <div className='signup-role-heading'>
                                        Choose Role
                                    </div>
                                    <div className='signup-role-input'>
                                        <div>
                                            <input type='radio' id='signUp-role' name='Choose-Role'/>
                                            <label htmlFor='signUp-role' value='User'>User</label>
                                        </div>
                                        <div>
                                            <input type='radio' id='signUp-role' name='Choose-Role'/>
                                            <label htmlFor='signUp-role' value='Admin'>Admin</label>    
                                        </div>
                                        
                                    </div>

                                </div>
                                
                                
                                <div className='SignButtonContainer'>
                                    <button className='SignBtn'>Register</button>

                                </div>

                                <div className='redirect-to-signUp'>
                                    <span>Already have an account?</span>
                                    
                                    <Link className='login-link' to={'/'}>Login Now!</Link>
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

export default SignUp;