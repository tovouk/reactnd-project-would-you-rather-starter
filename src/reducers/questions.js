import {RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION} from '../actions/questions'
export default function questions (state = {},action) {
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    optionOne: {
                        ...state[action.qid].optionOne,
                        votes: action.answer === 'optionOne'
                        ? state[action.qid].optionOne.votes.concat([action.authedUser])
                        : state[action.qid].optionOne.votes
                    },
                    optionTwo: {
                        ...state[action.qid].optionTwo,
                        votes: action.answer === 'optionTwo'
                        ? state[action.qid].optionTwo.votes.concat([action.authedUser])
                        : state[action.qid].optionTwo.votes
                    }
                }
            }
        case ADD_QUESTION:
            const {question} = action

            return {
                ...state,
                [question.id] : question
            }
        default:
            return state
    }
}