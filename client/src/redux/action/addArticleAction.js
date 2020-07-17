import axios from 'axios';
import { ADD_ARTICLE } from '../actionType';

const addArticleAction = (article) => dispatch => {

    axios
        .post("/api/articles/add", article)
        .then( res => dispatch({
            type: ADD_ARTICLE,
            payload: res.data
        }))
        
}

export default addArticleAction