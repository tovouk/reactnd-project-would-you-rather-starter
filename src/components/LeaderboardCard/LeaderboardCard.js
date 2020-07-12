import React,{Component} from 'react'
import {connect} from 'react-redux'

import './Leaderboard.css'

//Making functional as no updates are expected
class LeaderboardCard extends Component{
        

    render(){
        return (
            <div className="userCard">
                <h1>{this.props.key}</h1>
                <img alt={this.props.user.name} src={this.props.user.avatarURL}/>
                <div className="userdetails">
                    <p>{this.props.user.name}</p>
                    <p>Questions Asked: {this.props.user.questions.length}</p>
                    <p>Questions Answered: {Object.keys(this.props.user.answers).length}</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({users},{id,key}) => ({
    user: users[id],
    key
})


export default connect(mapStateToProps)(LeaderboardCard)