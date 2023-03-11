import React, { useEffect, useState } from 'react';
import style from './Home.css'
import axios from 'axios'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Topics from '../components/Topics';
import Body from '../components/Body';
import loading from '../images/loading.gif'

// import dummy from '../components/dummyData';
import CompPostCreate from '../components/CompPostCreate';
import CompRedirect from '../components/CompRedirect';



const Home = ({isLoggedIn,setArticle,setIsLoggedIn}) => {
    const[headlines,setHeadlines]=useState([])
    const[pageNumber,setPageNumber]=useState(1)

    


    useEffect(()=>{
   
        async function getData(){
            let url=`${process.env.REACT_APP_BASE_URL}/home?limit=5&skip=${pageNumber}`
            let response = await axios.get(url)
            // console.log(response)
            if(Array.isArray(response.data)){
                setHeadlines(data=>[...data,...response.data])

            }else{
                window.alert('failed to connect to the server ')

            }
            // if(response.data.msg.indexOf('errorAxiosError') !== -1){
            // }else{
            // }
        }
        getData()       


        
    },[pageNumber])



    async function handleScrollEvent(){

        if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight){
            
            setPageNumber(state=>state+1)
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollEvent)
    },[])


    return (
        <div className='home'>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <main className='homeMain'>
                <div className='homeLeft'>
                    <Topics isLoggedIn={isLoggedIn} setTopic={()=>{}} />
                    <div className='createContainer'>
                        {isLoggedIn.loginState?<CompPostCreate/>:<CompRedirect/>  }

                    </div>

                </div>
                <div className='homeRight'>

                    <div className='bodyContainer'>
                    <div className='createContainer createContainerSmall'>
                        {isLoggedIn.loginState?<CompPostCreate/>:<CompRedirect/>  }

                    </div>
                        {headlines.length>0?
                        <Body setArticle={setArticle} data={headlines}/>:
                        <div id='loading'>
                            <img  src={loading} alt="loading ..." />
                        </div>                
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;