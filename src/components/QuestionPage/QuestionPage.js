import React, { Component } from 'react'
import {handleAnswerQuestion} from '../../actions/shared'
import { connect } from 'react-redux'
import './QuestionPage.css'

export class QuestionPage extends Component {

    answerQuestion(option) {
        const {authedUser,dispatch,question} = this.props
        dispatch(handleAnswerQuestion({authedUser,qid:question.id,answer:option}))
    }
    render() {
        const {authedUser,question,user} = this.props

        const optionOne = question.optionOne.votes.includes(authedUser)
        const optionTwo = question.optionTwo.votes.includes(authedUser)

        return (
            <div className="questionPage">
            <div className={`${this.props.answered ? "answered-question-page" : "question-page" }`}>
            <div className="wyr-title">
                <img className="mini-img text-center" src={user.avatarURL} />
                <h1 className="text-center">Would you rather:</h1>
                </div>
            {this.props.answered
            ?
            <div className='flex'>
            <p className={ optionOne ? 'choice optionanswered' : 'optionanswered'}>
            {question.optionOne.text}<br/><br/>
            <span>Votes: {question.optionOne.votes.length}</span><br/>
            <span>{Math.round(question.optionOne.votes.length/ (question.optionOne.votes.length + question.optionTwo.votes.length) * 100)} %</span>
            </p>
            <p className={ optionTwo ? 'choice optionanswered' : 'optionanswered'}>
                {question.optionTwo.text}<br/><br/>
                <span>Votes: {question.optionTwo.votes.length}</span><br/>
                <span>{Math.round(question.optionTwo.votes.length/ (question.optionOne.votes.length + question.optionTwo.votes.length) * 100)} %</span>
            </p>
            </div>
            : 
            <div className='flex'>
            <p onClick={() => this.answerQuestion("optionOne")} className="option optionunanswered">
            {question.optionOne.text}<br/><br/>
            <span>Votes: {question.optionOne.votes.length}</span>
            </p>
            <p onClick={() => this.answerQuestion("optionTwo")} className="option optionunanswered">
                {question.optionTwo.text}<br/><br/>
                <span>Votes: {question.optionTwo.votes.length}</span>
            </p>
            </div>
            }
        </div>
            </div>
        )
    }
}

const mapStateToProps = ({questions,authedUser,users},props) => {
    
    const {question_id} = props.match.params
    const question = questions[question_id]
    const answered = question.optionOne.votes.includes(authedUser)
        || question.optionTwo.votes.includes(authedUser)

    return {
        question,
        authedUser,
        answered,
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(QuestionPage)
