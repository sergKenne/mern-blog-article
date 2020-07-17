import axios from 'axios';
import { GET_DETAIL } from '../actionType';

const detailAction = (id) => dispatch => {

    axios
       .get(`/api/articles/${id}`)
       .then(res => dispatch({
           type: GET_DETAIL,
           payload: res.data
       }))
}

export default detailAction;