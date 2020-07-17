import { 
    GET_ARTICLES, 
    LOADING_ARTICLE, 
    ADD_ARTICLE, 
    DELETE_ARTICLE, 
    GET_DETAIL, 
    UPDATE_ARTICLE, 
    GET_CURRENT_ARTICLE 
} from "../actionType";

const initialState = {
    articles: [],
    loading: false,
    detail: {},
    currentArticle: null
}

const articlesReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                loading: false
            }

        case GET_DETAIL: 
            return {
                ...state,
                detail: action.payload
            }

        case GET_CURRENT_ARTICLE: 
        return {
            ...state,
            currentArticle: action.payload
        }

        case ADD_ARTICLE: 
            return {
                ...state,
                articles: [action.payload, ...state.articles]
            }

        case UPDATE_ARTICLE: 
            let updateIndex = null;
            const currentArticle = state.articles.forEach((item, index) => {
                if(item._id === action.payload.id){
                    console.log(index);
                    updateIndex = index;
                    return;
                } 
            })
            // return {
            //     ...state,
            //     articles:[]
            // }

        case DELETE_ARTICLE: 
            return {
                ...state,
                articles: state.articles.filter(article => article._id !== action.payload)
            }

        case LOADING_ARTICLE:
            return {
                ...state,
                loading: true
            }

        default:
           return state; 
    }
    
}

export default articlesReducer;