import {
    FETCH_MISSION_DATA_START,
    FETCH_MISSION_DATA_SUCCESS,
    FETCH_MISSION_DATA_FAILURE 
} from '../actions'

const initialState = {
    missions : [],
    isLoading : false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MISSION_DATA_START:
            return{
                ...state,
                isLoading: true,
                error: ''
            }

        case FETCH_MISSION_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                missions: action.payload,
                error: ''
            }
        default:
            return state;
    }
}