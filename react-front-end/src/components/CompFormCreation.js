import React, { useState } from 'react';
import style from './CompFormCreation.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CompFormCreation = ({isLoggedIn}) => {
    const [postInfo,setPostInfo]=useState({
        source: '',
        author: '',
        title: '',
        description: '',
        url: '',   
        urlToImage: '',
        content: '',
        userId:''
      })
    const [media,changeMedia]=useState('')

    const History=useNavigate()
    async function postData(){
        let file=new FormData()
        file.append('media',media);

        let url=`${process.env.REACT_APP_BASE_URL}/createPost?name=${postInfo.source}&author=${postInfo.author}&title=${postInfo.title}&content=${postInfo.content}&userId=${isLoggedIn.userId}&description=${postInfo.description}`
        // postInfo.userId=isLoggedIn.userId
        let response=await axios.post(url,file)
        if(response.data.msg){
            handleSubmit()
        }
    }
    const handleSubmit=()=>{
        History('/myArticle')
        
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
                        {/* <input required type={'text'}/> */}
                        <input className='pictureInput' onChange={(e)=>{
            
                            changeMedia(e.target.files[0])
                        }} type={'file'}/>
                        
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

                        <button  className='btnCreatePost' type='submit'>submit</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default CompFormCreation;