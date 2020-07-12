import {getInitialData,saveQuestionAnswer} from '../utils/api'
import {receiveUsers,userAnswerQuestion} from './users'
import {receiveQuestions,answerQuestion} from './questions'
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