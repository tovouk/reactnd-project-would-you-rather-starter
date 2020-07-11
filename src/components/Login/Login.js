import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserSelect from '../UserSelect/UserSelect'
import './Login.css'

class Login extends Component {

    render(){
        return (
            <div className="center">
                {this.props.users.map (user => (
                    <UserSelect key={user} id={user} />
                ))}
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
      users : Object.keys(users)
    }
  }

export default connect(mapStateToProps)(Login)