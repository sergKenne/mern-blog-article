import React , {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import styled from 'styled-components';

//import getArticlesAction from '../redux/action/getArticlesAction'
import detailAction from '../redux/action/detailAction';


const Detail = (props) => {

    useEffect(()=>{
        props.getDetail(props.match.params.id)
    },[]);
    
    return (
        <MainArticleContainer>
            {
                !props.detail ? <img className="spinner" src="/spinner.gif" alt="Loading..." /> : (<div className="container">
                    <h2>{props.detail.title}</h2>
                    <p>{props.detail.description}</p>
                    <p className="badge badge-secondary py-2">{props.detail.author}</p> 
                    <br/>
                    <Link to="/" type="submit" className="btn btn-primary">Back To Home</Link>
                </div>)
            }
            
        </MainArticleContainer>
    )
}

const mapStateToProps = state => ({
    articles: state.articles.articles,
    detail: state.articles.detail
})

//test
const mapDispatchToProps = dispatch => ({
    // fetchArticles: () => dispatch(getArticlesAction()),
    getDetail: (id) => dispatch(detailAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);


const MainArticleContainer = styled.div`
    margin: 3rem auto;
    //padding: 3rem 14rem;

    h2 {
        text-aling: center;
        font-weight: 700;
        color: var(--dark-green);
    }

    .spinner {
           
        width:344px;
        height: 264px;
        display: block;
        margin: 0 auto;
        margin-top: 200px;
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);

        &:hover {
            background: var(--light-green);
        }
    }
`;
