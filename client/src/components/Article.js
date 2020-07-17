import React from 'react';
import {connect} from 'react-redux';
import deleteArticleAction from '../redux/action/deleteArticleAction'
import { Link } from 'react-router-dom';
// import detailAction from '../redux/action/detailAction';
// import getCurrentArticleAction from '../redux/action/getCurrentArticleAction';
// import articlesReducer from '../redux/reducers/articlesReducer'

const Article = ({article, removeArticle, getDetail, getUpdate}) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h3 className="card-title">{article.title}</h3>
                <p className="card-subtitle mb-2 text-muted my-2">{article.createdAt}</p>
                <p className="card-text">{article.description}</p>
                <h5 className="text-muted mb-3">{article.author}</h5>
                <Link to={`/detail/${article._id}`} type="button" className="btn btn-primary mr-2" >Read More</Link>
                <Link to={`/edit-article/${article._id}`} type="button" className="btn btn-info mr-2" >Edit</Link>
                <button  type="button" className="btn btn-danger mr-2" onClick={() => removeArticle(article._id) } >Delete</button>
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     articles: state.articles.articles,
//     loading: state.articles.loading
// })

const mapDispatchToProps = dispatch => ({
    removeArticle: (id) => dispatch(deleteArticleAction(id)),
    // getDetail: (id) => dispatch(detailAction(id)),
    // getUpdate: (id) => dispatch(getCurrentArticleAction(id))
})

export default connect(null, mapDispatchToProps)(Article);

