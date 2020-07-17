import React, {useState} from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import  addArticleAction from "../redux/action/addArticleAction"

const AddArticle = ({postArticle}) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    //const [message, setMessage] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        const newArticle = {
            title,
            author,
            description
        };
        
        

        new Promise((resolve, reject) => {
            postArticle(newArticle);
            resolve();
        }).then( () => {
            setAuthor("");
            setDescription("");
            setTitle("");
        })

        
    }
    return (
        <AddArticleContainer>
            <div className="container">
                <h1 className="my-3">Add New Article</h1>
                {/* <span className="message text-success">{message}</span> */}
                <form onSubmit={handleSubmit} >
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
                    <button type="submit" className="btn btn-primary">Post article</button>
                </form>
            </div>
        </AddArticleContainer>
    )
}

// const mapStateToProps = state => ({
//     articles: state.articles.articles,
//     loading: state.articles.loading
// })

const mapDispatchToProps = dispatch => ({
    postArticle: (article) => dispatch(addArticleAction(article))
})

export default connect(null, mapDispatchToProps)(AddArticle);

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
