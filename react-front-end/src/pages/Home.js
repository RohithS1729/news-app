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



const Home = ({isLoggedIn,setArticle}) => {
    const[headlines,setHeadlines]=useState([])
    const[pageNumber,setPageNumber]=useState(1)
    


    useEffect(()=>{
   
        async function getData(){
            console.log(pageNumber,'pagenumber')
            let url=`${process.env.REACT_APP_BASE_URL}/home?limit=5&skip=${pageNumber}`
            let response = await axios.get(url)
            if(response.data){
                console.log(response.data)

                setHeadlines(data=>[...data,...response.data])
            }else{
                console.log(response,'else')
            }
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
            {/* <Header/> */}
            <Topics/>
            {isLoggedIn.loginState?<CompPostCreate/>:<CompRedirect/>  }
            
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

export default Home;