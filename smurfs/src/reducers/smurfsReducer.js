import { 
    FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,
} from "../actions";

export const initialState = {
    smurfs: [],
    isFetching: false,
    isEditing: false,
    error: ""
};

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_FAILURE:
            return {
                ...state,
                smurfs: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}