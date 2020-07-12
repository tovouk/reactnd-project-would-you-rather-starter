import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from '../QuestionCard/QuestionCard'
import './QuestionList.css'

class QuestionList extends Component {

    state = {
        filter: 'unanswered'
    }

    changeQuestions = (text) => {
        this.setState({filter:text})
    }
    
    render(){
        let unansweredQuestions = this.props.questionIDs.filter(question => (
            !this.props.questions[question].optionOne.votes.includes(this.props.authedUser)
            && !this.props.questions[question].optionTwo.votes.includes(this.props.authedUser)
        ))
        let answeredQuestions = this.props.questionIDs.filter(question => (
            this.props.questions[question].optionOne.votes.includes(this.props.authedUser)
            || this.props.questions[question].optionTwo.votes.includes(this.props.authedUser)
        ))
        return (
            <div className="list">
                <h1>Questions List</h1>
                <div className="flexquestions">
                    <h1 className={`${this.state.filter === 'unanswered' ? 'activeFilter' : ''}`} onClick={()=> this.changeQuestions('unanswered')}>Unanswered</h1>
                    <h1 className={`${this.state.filter === 'answered' ? 'activeFilter' : ''}`} onClick={() => this.changeQuestions('answered')}>Answered</h1>
                </div>
                {this.state.filter === "unanswered"
                ? unansweredQuestions.map(question => <Question  key={question} id={question} />)
                : answeredQuestions.map(question => <Question answered="yes" key={question} id={question} />)
               }
            </div>
        )
    }

}

function mapStateToProps ({questions,authedUser}) {
    return {
        questionIDs: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList)