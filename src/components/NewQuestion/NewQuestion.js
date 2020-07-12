import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NewQuestion.css'

export class NewQuestion extends Component {

    state = {
        question: '',
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) =>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    checkDisabled(){
        const {question,optionOne,optionTwo} = this.state

        return question === '' || optionOne === '' || optionTwo === ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
        const {question,optionOne,optionTwo} = this.state

        return (
            <div className="constrain">
                <form className="addForm">
                    <div>
                    <label>Would you rather</label>
                    <input placeholder="Enter a question" className="w480" onChange={this.handleChange}
                        value={question} type="text" name="question" id="question"/>
                    </div>
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
                    <button disabled={question === '' || optionOne === '' || optionTwo === ''}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(NewQuestion)
