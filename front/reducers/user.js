export const initialState = {
    logInDone: false,
    logInError: null,
    signUpDone: false,
    signUpError: null,
    logOutDone: false,
    logOutError: null,
    loadMyInfoDone: false,
    loadMyInfoError: null,
    me: null
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    data: data,
});

export const googleLoginRequestAction = () => ({
    type: GOOGLE_LOG_IN_REQUEST,
});

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            console.log('reducer LOGIN - user');
            return state = {
                ...state,
                logInDone: false,
                logInError: null,
            }
        case LOG_IN_SUCCESS:
            console.log('reducer LOGIN - SUCCESS - user');
            console.log(action.data);
            return state = {
                ...state,
                logInDone: true,
                me: action.data
            }
        case LOG_IN_FAILURE:
            return state = {
                ...state,
                logInError: action.error,
            }
        case SIGN_UP_REQUEST:
            console.log('reducer SIGN-UP - user');
            return state = {
                ...state,
                signUpDone: false,
                signUpError: null,
            }
        case SIGN_UP_SUCCESS:
            console.log('reducer SIGN-UP - SUCCESS - user');
            return state = {
                ...state,
                signUpDone: true,
            }
        case SIGN_UP_FAILURE:
            return state = {
                ...state,
                signUpError: "이미 사용중인 이메일 입니다.", // unique: 1으로 해놨기 때문에
            }
        case LOG_OUT_REQUEST:
            console.log('reducer LOG_OUT - user');
            return state = {
                ...state,
                logOutDone: false,
                logOutError: null,
            }
        case LOG_OUT_SUCCESS:
            console.log('reducer LOG_OUT - SUCCESS - user');
            return state = {
                ...state,
                logInDone: false,
                logOutDone: true,
                me: null,
            }
        case LOG_OUT_FAILURE:
            return state = {
                ...state,
                logOutError: true,
            }
        case LOAD_MY_INFO_REQUEST:
            console.log('reducer LOAD_MY_INFO - user');
            return state = {
                ...state,
                loadMyInfoDone: false,
                loadMyInfoError: null,
            }
        case LOAD_MY_INFO_SUCCESS:
            console.log('reducer LOAD_MY_INFO - SUCCESS - user');
            if(!action.data) {
                return state = {
                    ...state,
                    loadMyInfoDone: true,
                }
            } else {
                return state = {
                    ...state,
                    logInDone: true,
                    signUpDone: true,
                    loadMyInfoDone: true,
                    me: action.data
                }
            }

        case LOAD_MY_INFO_FAILURE:
            return state = {
                ...state,
                loadMyInfoError: true,
            }

        default:
            return state;
    }
};

export default reducer;