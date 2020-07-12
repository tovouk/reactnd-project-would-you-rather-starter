import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {setAuthedUser} from '../../actions/authedUser'
import './Nav.css'


export class Nav extends Component {

    logout = ()=> {
        const {dispatch} = this.props
        dispatch(setAuthedUser("guest"))
        
    }

    render() {
        return (
            <nav className='nav'>
                <ul className="left">
                    <li>
                        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>Leaderboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>New Question</NavLink>
                    </li>
                </ul>
                <ul className="right">
                    {this.props.authedUser !== "guest" && (<li>Welcome {this.props.authedUser}</li>)}
                    {this.props.authedUser !== "guest" && (
                    <li onClick={this.logout} className="logout">Logout</li>)}
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({authedUser}) => ({
    authedUser
})


export default connect(mapStateToProps)(Nav)
