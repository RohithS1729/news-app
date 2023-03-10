import React, { useState } from 'react';
import style from './CompFormCreation.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CompFormCreation = ({isLoggedIn}) => {
    const [postInfo,setPostInfo]=useState({
        source: { id: null, name: '' },
        author: '',
        title: '',
        description: '',
        url: '',   
        urlToImage: '',
        content: '',
        userId:''
      })
    const History=useNavigate()
    async function postData(){
        let url=`${process.env.REACT_APP_BASE_URL}/createPost`
        postInfo.userId=isLoggedIn.userId
        let response=await axios.post(url,postInfo)
        console.log(response)
    }
    const handleSubmit=()=>{
        // History('/myArticle')
    }
    return (
        <div>
            <main>
                <div className='detailsCreatePost'>
                    <span>Enter Your Article Here! </span>
                </div>
                <form className='createPostForm' onSubmit={(e)=>{
                    e.preventDefault();
                    postData()
                }}>
                    <div>
                        <label>Source :</label>
                        <input required onChange={(e)=>{setPostInfo({...postInfo,source:e.target.value})}} type={'text'}/>
                        
                    </div>
                    <div>
                        <label>Author :</label>
                        <input required onChange={(e)=>{setPostInfo({...postInfo,author:e.target.value})}} type={'text'}/>
                        
                    </div>
                    <div>
                        <label>Title :</label>
                        <input required onChange={(e)=>{setPostInfo({...postInfo,title:e.target.value})}} type={'text'}/>
                        
                    </div>
                    <div>
                        <label>Description :</label>
                        <input required onChange={(e)=>{setPostInfo({...postInfo,description:e.target.value})}} type={'text'}/>
                        
                    </div>
                    {/* <div>
                        <label>url</label>
                        <input type={'text'}/>
                        
                    </div> */}
                    <div>
                        <label>Image :</label>
                        <input required type={'text'}/>
                        
                    </div>
                    <div>
                        <label>Content :</label>
                        <input required onChange={(e)=>{setPostInfo({...postInfo,content:e.target.value})}} type={'text'}/>
                        
                    </div>
                    {/* <div>
                        <label>source</label>
                        <input type={'text'}/>
                        
                    </div> */}
                    <div className='buttonformContainer'>

                        <button onClick={handleSubmit} className='btnCreatePost' type='submit'>submit</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default CompFormCreation;