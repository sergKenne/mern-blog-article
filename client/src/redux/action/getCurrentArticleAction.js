import axios from 'axios';
import { GET_CURRENT_ARTICLE } from '../actionType';

const getCurrentArticleAction = (id) => dispatch => {

    axios
       .get(`/api/articles/${id}`)
       .then(res => dispatch({
           type: GET_CURRENT_ARTICLE,
           payload: res.data
       }))
}

export default getCurrentArticleAction;