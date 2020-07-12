import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../Login/Login'

export class FourOhFour extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">This question does not exist</h1>
                <p className="text-center">Please navigate away from this url</p>
                {this.props.authedUser === "guest" ?
                    <Login /> : ''
                }
            </div>
        )
    }
}


export default connect()(FourOhFour)
