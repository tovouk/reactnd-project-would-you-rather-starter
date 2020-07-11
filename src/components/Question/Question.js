import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Question extends Component {
    //TODO create handler for answering question and appending question id/answer to authedUser

    render() {
        return (
            <div>
                <h1>Would you rather:</h1>
                <div className='flex'>
                    <p>{this.props.question.optionOne.text}</p>
                    <p>{this.props.question.optionTwo.text}</p>
                </div>
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
