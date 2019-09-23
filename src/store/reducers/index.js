import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import selectsReducer from './selects'

export default combineReducers({
  form: formReducer,
  selects: selectsReducer,
})