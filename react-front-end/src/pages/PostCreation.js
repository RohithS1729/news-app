import React, { useEffect, useState } from 'react';
import style from './PostCreation.css'
import axios from 'axios'

const PostCreation = ({isLoggedIn}) => {
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
    async function postData(){
        let url=`${process.env.REACT_APP_BASE_URL}/createPost`
        console.log(isLoggedIn)
        postInfo.userId=isLoggedIn.userId
        let response=await axios.post(url,postInfo)
        console.log(response)
    }

    return (
        <div className='PostCreation'>
            <main>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    postData()
                }}>
                    <div>
                        <label>source</label>
                        <input onChange={(e)=>{setPostInfo({...postInfo,source:e.target.value})}} type={'text'}/>
                        
                    </div>
                    <div>
                        <label>author</label>
                        <input onChange={(e)=>{setPostInfo({...postInfo,author:e.target.value})}} type={'text'}/>
                        
                    </div>
                    <div>
                        <label>title</label>
                        <input onChange={(e)=>{setPostInfo({...postInfo,title:e.target.value})}} type={'text'}/>
                        
                    </div>
                    <div>
                        <label>description</label>
                        <input onChange={(e)=>{setPostInfo({...postInfo,description:e.target.value})}} type={'text'}/>
                        
                    </div>
                    {/* <div>
                        <label>url</label>
                        <input type={'text'}/>
                        
                    </div> */}
                    <div>
                        <label>urlToImage</label>
                        <input type={'text'}/>
                        
                    </div>
                    <div>
                        <label>content</label>
                        <input onChange={(e)=>{setPostInfo({...postInfo,content:e.target.value})}} type={'text'}/>
                        
                    </div>
                    {/* <div>
                        <label>source</label>
                        <input type={'text'}/>
                        
                    </div> */}
                    <button type='submit'>submit</button>
                </form>
            </main>
        </div>
    );
};

export default PostCreation;