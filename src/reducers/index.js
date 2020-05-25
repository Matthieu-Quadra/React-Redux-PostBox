import { combineReducers } from 'redux';
import PostsListReducer from './post-list-reducer';
import PostReducer from './post-reducer';
import { reducer as ReducerForm } from 'redux-form';

const rootReducer = combineReducers({
  postsListReducer: PostsListReducer,
  postReducer: PostReducer,
  form: ReducerForm
});

export default rootReducer;
