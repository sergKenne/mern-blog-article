import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import editArticleAction from '../redux/action/editArticleAction';
import getCurrentArticleAction from '../redux/action/getCurrentArticleAction';
import detailAction from '../redux/action/detailAction';

const EditArticle = (props) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    

    


    useEffect(() => {

        async function fetchArticle() {
            await props.getUpdate(props.match.params.id);
            const article = await props.detail;

            setTitle(article.title);
            setAuthor(article.author);
            setDescription(article.description);
        }

        fetchArticle();       
        // new Promise((resolve, reject) => {
        //     props.getUpdate(props.match.params.id);
        //     console.log("curente:", props.detail)
        //     if(props.detail){
        //         console.log(props.detail)
        //         resolve(props.detail)
        //     } 
        // }).then(article => {
        //     setTitle(article.title);
        //     setAuthor(article.author);
        //     setDescription(article.description);
        // })
        
             
            

        
            //console.log("current:", props.currentArticle);
            // setTitle(props.currentArticle.title);
            // setAuthor(props.currentArticle.author);
            // setDescription(props.currentArticle.description);


    },[]);

    
    const updateArticle = (e) => {
        //e.preventDefault();
    }

    return (
        <AddArticleContainer>
            <div className="container">
                <h1 className="my-3">Update Article</h1>
                {/* <span className="message text-success">{message}</span> */}
                <form   onSubmit={updateArticle}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={title} className="form-control" id="title" placeholder="Title" onChange={ e => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author Name</label>
                        <input type="text" value={author} className="form-control" id="author" placeholder="Author Name" onChange={ e => setAuthor(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Article</label>
                        <textarea className="form-control" value={description} id="description" rows="3" onChange={ e => setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Update article</button>
                </form>
            </div>
        </AddArticleContainer>
    )
}

const mapStateToProps = state => ({
    articles: state.articles.articles,
    detail: state.articles.detail
    //loading: state.articles.loading,
    //currentArticle: state.articles.currentArticle
})

const mapDispatchToProps = dispatch => ({
    update: (id,article) => dispatch(editArticleAction(id, article)),
    getUpdate: (id) => dispatch(detailAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);


const AddArticleContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.35rem;

    h1 {
        font-weight: 700;
        color: var(--dark-green);
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);

        &:hover {
            background: var(--light-green);
        }
    }

    .message {
        font-weight: 700;
        
        padding: 1rem 1rem 1rem 0;
    }
`;
