import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from '../Question/Question'

class QuestionList extends Component {

    render(){
        return (
            <div>
                Question List
            </div>
        )
    }

}

export default connect()(QuestionList)