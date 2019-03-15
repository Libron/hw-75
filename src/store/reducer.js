import {
    CHANGE_VALUE, DECODE_TEXT_FAILURE,
    DECODE_TEXT_REQUEST, DECODE_TEXT_SUCCESS,
    ENCODE_TEXT_FAILURE,
    ENCODE_TEXT_REQUEST,
    ENCODE_TEXT_SUCCESS
} from "./actions";

const initialState = {
    encodeText: '',
    decodeText: '',
    password: '',
    result: '',
    loading: false,
    error: null
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ENCODE_TEXT_REQUEST:
            return {...state, loading: true};
        case ENCODE_TEXT_SUCCESS:
            return {...state, loading: false, result: action.encodedText};
        case ENCODE_TEXT_FAILURE:
            return {...state, loading: false, error: action.error};

        case DECODE_TEXT_REQUEST:
            return {...state, loading: true};
        case DECODE_TEXT_SUCCESS:
            return {...state, loading: false, result: action.decodedText};
        case DECODE_TEXT_FAILURE:
            return {...state, loading: false, error: action.error};

        case CHANGE_VALUE:
            const {name, value} = action.event.target;
            return {...state, [name]: value};
        default:
            return state;
    }
};

export default Reducer;