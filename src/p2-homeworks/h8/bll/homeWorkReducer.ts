import {UserType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check',
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up': {
                    return ([...state].sort((a,b) => a.name < b.name ? 1 : -1))
                }
                case 'down': {
                    return ([...state].sort((a,b) => a.name < b.name ? -1 : 1))
                }
                default: return state
            }
        }
        case 'check': {
            switch (action.payload) {
                case 18: {
                    return ([...state].filter(el => el.age >= 18))
                }
                default: return state
            }
        }
        default: return state
    }
}