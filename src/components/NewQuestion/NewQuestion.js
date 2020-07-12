import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../../actions/shared'
import {Redirect} from 'react-router-dom'
import './NewQuestion.css'

export class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (e) =>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    checkDisabled(){
        const {optionOne,optionTwo} = this.state

        return optionOne === '' || optionTwo === ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {dispatch} = this.props

        dispatch(handleAddQuestion(this.props.authedUser,this.state.optionOne,this.state.optionTwo))

        this.setState(()=> ({
            optionOne: '',
            optionTwo: ''
        }))

        this.setState({toHome:true})

    }

    render() {
        const {optionOne,optionTwo} = this.state
        
        if(this.state.toHome)
            return <Redirect to='/' />

        return (
            <div className="constrain">
                <form className="addForm" onSubmit={this.onSubmit} >
                    <h1>Would you rather?</h1>
                    <div>
                    <label>Option One</label>
                    <input placeholder="Enter an option" className="w480" onChange={this.handleChange}
                        value={optionOne} type="text" name="optionOne" id="optionOne"/>
                    </div>
                    <div>
                    <label>Option Two</label>
                    <input placeholder="Enter a second option" className="w480" onChange={this.handleChange}
                        value={optionTwo} type="text" name="optionTwo" id="optionTwo"/>
                    </div>
                    <button disabled={optionOne === '' || optionTwo === ''}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({questions,authedUser}) => ({
    authedUser
})

export default connect(mapStateToProps)(NewQuestion)
