import { ADD_POST, GET_POSTS, POST_LOADING } from "../actions/types";

const intialState = {
  posts: [],
  post: [],
  loading: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
