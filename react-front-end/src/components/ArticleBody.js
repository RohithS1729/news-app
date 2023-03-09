import React from 'react';
import style from './ArticleBody.css'
const ArticleBody = ({article}) => {
    return (
        <div className='articleBody'>
            <div className='articleTitle'>
                {article.title}
            </div>
            <div className='aboutTheArticle'>
                <div className='articleLeft'>
                    <div>
                        By: <i>{article.author?article.author:'anonymous'}</i>
                    </div>
                    <div>
                        Published At: {article.publishedAt}
                    </div>
                </div>
                <div className='articleRight'>
                    <div className='articleSource'>

                        Source: <i>{article.source.name?article.source.name:'anonymous'}</i>
                        {/* {?article.source.name:'Anon'} */}
                    </div>
                </div>

            
            </div>
            <div className='articleImageDiv' >
                <img className='articleImageTage'  src={article.urlToImage} alt={'imageRelated to article'}/>
            </div>
            <div className='articleDescription'>
                {article.description}
            </div>
            <div className='articleContent'>
                {article.content}
            </div>
        </div>
    );
};

export default ArticleBody;