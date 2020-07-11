import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from '../Question/Question'

class QuestionList extends Component {

    render(){
        return (
            <div>
                <h1>Questions List</h1>
                {this.props.questions.map(question=>(
                    <Question key={question} id={question} />
                ))}
            </div>
        )
    }

}

function mapStateToProps ({questions}) {
    return {
        questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)