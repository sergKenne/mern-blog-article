import axios from 'axios';
import { UPDATE_ARTICLE } from '../actionType';

const editArticleAction = (id, newArticle) => dispatch => {

    axios
       .put(`/api//update/${id}`,newArticle)
       .then(res => dispatch({
           type: UPDATE_ARTICLE,
           payload: {
               data:res.data,
               id: id
           }
       }))
}

export default editArticleAction;