const SET_IS_LOADING = 'SET_IS_LOADING'

const initState = {
    isLoading: false
}


type InitStateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case SET_IS_LOADING: {
            return {...state, isLoading: !state.isLoading}
        }
        default: return state
    }
}

export const loadingAC = () => {
    return {
        type: SET_IS_LOADING
    } as const
}