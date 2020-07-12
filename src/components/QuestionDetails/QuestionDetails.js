import React, { Component } from 'react'
import { connect } from 'react-redux'

export class QuestionDetails extends Component {
    render() {
        return (
            <div>
                QuestionDetails
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps)(QuestionDetails)
