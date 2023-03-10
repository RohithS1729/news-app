import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Article from '../pages/Article';
import Home from '../pages/Home';
import Login from '../pages/Login';
import News from '../pages/News';
import Footer from './Footer';
import Header from './Header';
import SignUp from '../pages/SignUp'
import PostCreation from '../pages/PostCreation';
import Topics from './Topics';
import MyArticle from '../pages/MyArticle';


const Router = () => {
    const [article,setArticle]=useState()
    const [isLoggedIn,setIsLoggedIn]=useState({
        loginState:false,
        userId:'',
        userName:''
    });
    
    return (
        
        <BrowserRouter>
                

            <Routes>
                <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setArticle={setArticle} />}></Route>
                <Route path='/login' element={<Login  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
                <Route path='/signUp' element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
                <Route path='/createPost' element={<PostCreation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>

                <Route path="/apple" element={<News isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setArticle={setArticle}/>}></Route>
                <Route path="/tesla" element={<News isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setArticle={setArticle}/>}></Route>
                <Route path="/buisness" element={<News isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setArticle={setArticle}/>}></Route>
                <Route path="/techcrunch" element={<News isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setArticle={setArticle}/>}></Route>
                <Route path="/wallstreet" element={<News isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  setArticle={setArticle}/>}></Route>
                <Route path="/article" element={<Article isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} article={article}/>}></Route>
                <Route path="/myArticle" element={<MyArticle isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setArticle={setArticle} article={article}/>}></Route>


            </Routes>
                <Footer/>
        </BrowserRouter>
    );
};

export default Router;