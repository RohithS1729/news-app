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


const Router = () => {
    const [article,setArticle]=useState()
    const [isLoggedIn,setIsLoggedIn]=useState({
        loginState:false,
        userId:'ddddd'
    });
    
    return (
        
        <BrowserRouter>
                
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path='/' element={<Home isLoggedIn={isLoggedIn} setArticle={setArticle} />}></Route>
                <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
                <Route path='/signUp' element={<SignUp/>}></Route>
                <Route path='/createPost' element={<PostCreation isLoggedIn={isLoggedIn}/>}></Route>

                <Route path="/apple" element={<News setArticle={setArticle}/>}></Route>
                <Route path="/tesla" element={<News setArticle={setArticle}/>}></Route>
                <Route path="/buisness" element={<News setArticle={setArticle}/>}></Route>
                <Route path="/techcrunch" element={<News setArticle={setArticle}/>}></Route>
                <Route path="/wallstreet" element={<News  setArticle={setArticle}/>}></Route>
                <Route path="/article" element={<Article article={article}/>}></Route>


            </Routes>
                <Footer/>
        </BrowserRouter>
    );
};

export default Router;