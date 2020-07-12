export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'

export function receiveUsers (users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function userAnswerQuestion ({authedUser,qid,answer}) {
    return {
        type: USER_ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}