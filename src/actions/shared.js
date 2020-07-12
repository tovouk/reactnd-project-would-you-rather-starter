import {getInitialData,saveQuestionAnswer,saveQuestion} from '../utils/api'
import {receiveUsers,userAnswerQuestion,createQuestion} from './users'
import {receiveQuestions,answerQuestion,addQuestion} from './questions'
import {setAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = "guest"

export function handleInitialData () {
    return (dispatch)=> {
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion (authedUser,optionOneText,optionTwoText) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question)=> {
            dispatch(addQuestion(question))
            dispatch(createQuestion({authedUser,question:question.id}))
        })
        .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))
        dispatch(userAnswerQuestion(info))
        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            dispatch(answerQuestion(info))
            dispatch(userAnswerQuestion(info))
            alert('There was an error answering a question. Try again.')
        })
    }
}