import {saveQuestion,saveQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (optionOneText,optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question)=> dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function answerQuestion ({authedUser,questionID,answer}) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        questionID,
        answer
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))
        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            dispatch(answerQuestion(info))
            alert('There was an error answering a question. Try again.')
        })
    }
}