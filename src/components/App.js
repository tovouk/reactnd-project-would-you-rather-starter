import React, {Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login/Login'
import QuestionList from './QuestionList/QuestionList'

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            {
              this.props.loading === true ? <div>Loading</div> : this.props.authedUser === "guest" ? <Login /> : <QuestionList/>  
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);