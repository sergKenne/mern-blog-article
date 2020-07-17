import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Article from './Article';

const Articles = ({articles, loading}) => {
    
    return (
        <div className="container">
            <h1 className="my-3">Articles</h1>
            <div className="articles">
                {
                    loading ? <img className="spinner" src="/spinner.gif" alt="Loading..." /> : articles.map(article => {
                        return <Article article={article} key={article._id} />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    articles: state.articles.articles,
    loading: state.articles.loading
})

export default connect(mapStateToProps,null)(Articles);
