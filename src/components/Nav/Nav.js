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
                        <NavLink to='/new' exact activeClassName='active'>New Question</NavLink>
                    </li>
                </ul>
                <ul className="right">
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
