import axios from '../axios-instance';

export const ENCODE_TEXT_REQUEST = 'ENCODE_TEXT_REQUEST';
export const ENCODE_TEXT_SUCCESS = 'ENCODE_TEXT_SUCCESS';
export const ENCODE_TEXT_FAILURE = 'ENCODE_TEXT_FAILURE';

export const DECODE_TEXT_REQUEST = 'DECODE_TEXT_REQUEST';
export const DECODE_TEXT_SUCCESS = 'DECODE_TEXT_SUCCESS';
export const DECODE_TEXT_FAILURE = 'DECODE_TEXT_FAILURE';

export const encodeTextRequest = () => {
    return {type: ENCODE_TEXT_REQUEST}
};
export const encodeTextSuccess = (encodedText) => {
    return {type: ENCODE_TEXT_SUCCESS, encodedText}
};
export const encodeTextFailure = error => {
    return {type: ENCODE_TEXT_FAILURE, error}
};

export const decodeTextRequest = () => {
    return {type: DECODE_TEXT_REQUEST}
};
export const decodeTextSuccess = (decodedText) => {
    return {type: DECODE_TEXT_SUCCESS, decodedText}
};
export const decodeTextFailure = error => {
    return {type: DECODE_TEXT_FAILURE, error}
};

export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (event) => {
    return {type: CHANGE_VALUE, event}
};

export const encodeTextHandler = () => {
    return (dispatch, getState) => {
        dispatch(encodeTextRequest());
        const state = getState();
        if (state.password === '') {
            alert('Please, Enter Password')
        } else {
            const data = {password: state.password, encodeText: state.encodeText};
            axios.post('/encode', data).then(response => {
                dispatch(encodeTextSuccess(response.data.encodedText));
            }, error => {
                dispatch(encodeTextFailure(error));
            });
        }
    }
};

export const decodeTextHandler = () => {
    return (dispatch, getState) => {
        dispatch(decodeTextRequest());
        const state = getState();
        if (state.password === '') {
            alert('Please, Enter Password')
        } else {
            axios.post('/decode', {password: state.password, decodeText: state.decodeText}).then(response => {
                dispatch(decodeTextSuccess(response.data.decodedText));
            }, error => {
                dispatch(decodeTextFailure(error));
            });
        }
    }
};