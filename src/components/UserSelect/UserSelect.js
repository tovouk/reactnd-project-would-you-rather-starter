import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UserSelect.css'
import {setAuthedUser} from '../../actions/authedUser'

export class UserSelect extends Component {

    selectUser = ()=> {
        const {dispatch} = this.props
        dispatch(setAuthedUser(this.props.id))
    }

    render() {
        return (
            <div className="usercard" onClick={this.selectUser}>
                <img src={this.props.user.avatarURL} />
                <div className="user-info">
                    <span className='title'>{this.props.user.name}</span>
                    <p>Number of Questions: {this.props.user.questions.length}</p>
                    <p>Number of Answers: {Object.keys(this.props.user.answers).length}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users},{id}) => {
    const user = users[id]

    return {
        user
    }
}


export default connect(mapStateToProps)(UserSelect)
