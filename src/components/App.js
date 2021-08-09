import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from '../components/Dashboard'
import NewTweet from '../components/NewTweet'
import TweetPage from '../components/TweetPage'
import LoadingBar from 'react-redux-loading'
import {Route} from 'react-router-dom'
import Nav from '../components/Nav'
 

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    
    return (
        <Fragment>
            <LoadingBar />
          <div className="App" >
            <Nav/>
            {this.props.loading === true
              ? null
              : <div>
                <Route exact path='/' component={Dashboard}/>
                <Route  path='/new' component={NewTweet}/>
                <Route exact path='/tweet/:id' component={TweetPage}/>
              </div>
            }
          </div>
        </Fragment>
        )
  }
}

function mapStateToProps ({ authUser }) {
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App) 
