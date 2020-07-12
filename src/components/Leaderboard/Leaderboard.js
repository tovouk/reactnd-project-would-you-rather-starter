import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from '../LeaderboardCard/LeaderboardCard'

export class Leaderboard extends Component {
    render() {
        
        return (
            <div>
                Leaderboard
            </div>
        )
    }
}
//TODO Sort users by sum of asked & answered questions
const mapStateToProps = ({users}) => ({
    users
})


export default connect(mapStateToProps)(Leaderboard)
