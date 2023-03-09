import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Topics from '../components/Topics';
import Body from '../components/Body';
import Footer from '../components/Footer';
import loading from '../images/loading.gif'
import styles from './News.css'

const News = ({setArticle}) => {
    const [topic,setTopic]=useState('')
    // const [data,setData]=useState([])
    const [pageNumber,setPageNumber]=useState(1)
    const[headlines,setHeadlines]=useState([])


    // const [transferArticle,settransfer]=useState({})
    // async function getData(){
    //     let url=`${process.env.REACT_APP_BASE_URL}/topic?topic=${topic}&limit=5&skip=1`
    //     let response = await axios.get(url)
    //     setData(data=>[...data,...response.data])
    // }



    useEffect(()=>{
        setTopic(window.location.href.split("/").pop())


    },[])
    useEffect(()=>{

    },[topic])
    useEffect(()=>{
        if(topic.length>0){
            async function getData(){
                console.log(pageNumber,'pagenumber')
                
                // let url=`${process.env.REACT_APP_BASE_URL}/home?limit=5&skip=${pageNumber}`
                    let url=`${process.env.REACT_APP_BASE_URL}/topic?topic=${topic}&limit=5&skip=${pageNumber}`

                let response = await axios.get(url)
                if(response.data){
                    console.log(response.data)
    
                    setHeadlines(data=>[...data,...response.data])
                }else{
                    console.log(response,'else')
                }
            }

            getData() 
        }



        
    },[pageNumber,topic])

    async function handleScrollEvent(){

        if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight){
            
            setPageNumber(state=>state+1)
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollEvent)
    },[])


    return (
        <div className='newsPage'>

            {/* <Header/> */}
            <Topics/>
            <main>
                {headlines.length>0?
                <Body setArticle={setArticle} data={headlines}/>:
                <div id='loading'>
                    <img  src={loading} alt="loading ..." />

                </div>
                
                }

            </main>
            {/* <Footer/> */}
        </div>
    );
};

export default News;
