import axios from 'axios';
import { GET_ARTICLES } from '../actionType';
import setArticlesLoading from './setArticlesLoading'

const getArticlesAction = () => dispatch => {

    dispatch(setArticlesLoading());

    axios
        .get("/api/articles")
        .then(res => {
            dispatch({
                type: GET_ARTICLES,
                payload: res.data
            })
        })

}

export default getArticlesAction;



