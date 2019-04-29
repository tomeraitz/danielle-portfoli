import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import data from '../reducers/mainReducer'
import projectsData from '../reducers/projectReducer'
import form from '../reducers/formReducer'

const allReducers = combineReducers({data, projectsData, form})
const store = createStore(allReducers, applyMiddleware(thunk))

export default store