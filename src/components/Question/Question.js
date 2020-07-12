import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAnswerQuestion} from '../../actions/shared'
import './Question.css'

export class Question extends Component {

    answerQuestion(option) {
        const {authedUser,dispatch,question} = this.props
        dispatch(handleAnswerQuestion({authedUser,qid:question.id,answer:option}))
    }

    render() {
        return (
            <div className={`${this.props.answered ? "answered-question" : "question" }`}>
                <h1>Would you rather:</h1>
                {this.props.answered
                ?
                <div className='flex'>
                <p className="optionanswered">
                {this.props.question.optionOne.text}<br/><br/>
                <span>Votes: {this.props.question.optionOne.votes.length}</span>
                </p>
                <p className="optionanswered">
                    {this.props.question.optionTwo.text}<br/><br/>
                    <span>Votes: {this.props.question.optionTwo.votes.length}</span>
                </p>
                </div>
                : 
                <div className='flex'>
                <p onClick={() => this.answerQuestion("optionOne")} className="option">
                {this.props.question.optionOne.text}<br/><br/>
                <span>Votes: {this.props.question.optionOne.votes.length}</span>
                </p>
                <p onClick={() => this.answerQuestion("optionTwo")} className="option">
                    {this.props.question.optionTwo.text}<br/><br/>
                    <span>Votes: {this.props.question.optionTwo.votes.length}</span>
                </p>
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps ({authedUser,questions,users},{id}) {
    const question = questions[id]

    return {
        authedUser,
        question,
        users
    }
}

export default connect(mapStateToProps)(Question)
