import { combineReducers } from 'redux'
import { loadingBarReducer  } from 'react-redux-loading'

import users from '../reducers/users'
import authUser from '../reducers/authUser'
import tweets from '../reducers/tweets'

export default combineReducers({
  authUser,
  users,
  tweets,
  loadingBar : loadingBarReducer,
})