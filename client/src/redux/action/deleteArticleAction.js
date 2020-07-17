import axios from 'axios';
import { DELETE_ARTICLE } from '../actionType';

const deleteArticleAction = id => dispatch => {

    //console.log("this is id:",typeof id)
    axios
        .delete(`/api/articles/delete/${id}`)
        .then( res => {
            dispatch({
                type: DELETE_ARTICLE,
                payload: id
            })
        })
}

export default deleteArticleAction;