import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECIEVE_TWEETS'
export const TOGGLE_TWEETS = 'TOGGLE_TWEETS'
export const SAVE_TWEET = 'SAVE_TWEET'

export function receiveTweets(tweets){
  return {
    type : RECEIVE_TWEETS,
    tweets,
  }
}

function toggleTweets({id, authUser, hasLiked}){
  return {
    type : TOGGLE_TWEETS,
    id,
    authUser,
    hasLiked,
  }
}

export function handleToggleTweets(info){
  return (dispatch)=>{
    dispatch(toggleTweets(info))
    return saveLikeToggle(info).catch((e)=>{
      console.warn('Error something went wrong!',e)
      dispatch(toggleTweets(info))
      alert('There was an error liking the tweet, Try Again.')
    })
  }
}

function saveTweetAction(tweet){

  return {
    type : SAVE_TWEET,
    tweet,
  }
}

export function handleSaveTweet({text,replyingTo}){
  return (dispatch,getState)=>{
    const {authUser} = getState()
    dispatch(showLoading())
    return saveTweet({
      text,
      author : authUser,
      replyingTo,
    }).then((tweet)=>{
      dispatch(hideLoading())
      dispatch(saveTweetAction(tweet))
    }).catch((e)=>{
      console.warn('Error something went wrong!',e)
      alert('There was an error liking the tweet, Try Again.')
    })
  }
}