import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './QuestionCard.css'

export class Question extends Component {


    render() {

        const {authedUser,question,user} = this.props

        const optionOne = question.optionOne.votes.includes(authedUser)
        const optionTwo = question.optionTwo.votes.includes(authedUser)

        return (
            <Link to={`/questions/${question.id}`}>
            <div className={`${this.props.answered ? "answered-question" : "question" }`}>
                <div className="wyr-title">
                <img alt={user.name} className="mini-img" src={user.avatarURL} />
                <h1>Would you rather:</h1>
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
                <p className="option">
                {question.optionOne.text}<br/><br/>
                </p>
                <p className="option">
                    {question.optionTwo.text}<br/><br/>
                </p>
                </div>
                }
                </div>
            </Link>
        )
    }
}

function mapStateToProps ({authedUser,questions,users},{id}) {
    const question = questions[id]

    return {
        authedUser,
        question,
        users,
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Question)
