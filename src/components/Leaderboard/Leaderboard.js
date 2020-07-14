import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from '../LeaderboardCard/LeaderboardCard'
import './Leaderboard.css'

export class Leaderboard extends Component {
    render() {
        return (
            <div className="leaderboard center">
                <h1 className="m-auto">Leaderboard</h1>
                {this.props.users.map((user,index)=>(
                    <LeaderboardCard id={user} key={index} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({users}) => ({
    users: Object.keys(users)
    .sort((a,b)=> (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length))
})


export default connect(mapStateToProps)(Leaderboard)
