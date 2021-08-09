import {getInitialData} from '../utils/api.js'
import {receiveUsers} from '../actions/users'
import {receiveTweets} from '../actions/tweets'
import {setAuthUser} from '../actions/authUser'
import {showLoading, hideLoading} from 'react-redux-loading'
 
const authUserId = 'tylermcginnis'

export function handleInitialData(){
  return (dispatch)=>{
    dispatch(showLoading())
    return getInitialData()
      .then(({users,tweets})=>{
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthUser(authUserId))
        dispatch(hideLoading())
      })
  }
}



// In the Planning Stage, we also determined that the Dashboard Component will be a container since it will need access to the `tweets` part of the store in order to display the list of tweets.

// To make a container, we need to make use the `connect()` function. Remember that the signature of the connect function looks like this:

