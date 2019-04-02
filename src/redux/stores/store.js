import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import data from '../reducers/mainReducer'

const allReducers = combineReducers({data})
const store = createStore(allReducers, applyMiddleware(thunk))

export default store