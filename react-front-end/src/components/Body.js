import React from 'react';
import NewsCard from './NewsCard';

const Body = ({setArticle,data}) => {
    return (
        <div>
            <div>
                {data.length>0?data.map(val=>{
                    return (
                        <NewsCard key={val.title} setArticle={setArticle} newsData={val}/>
                    )
                }):'loading . . .'}
            </div>
        </div>
    );
};

export default Body;