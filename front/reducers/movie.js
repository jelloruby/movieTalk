export const initialState = {
    src: "",
    title: "",
    genre: "",
    rating: "",
    repRlsDate: "",
    runtime: "",
};

export const GET_MOVIE_INFO = "GET_MOVIE_INFO";

export const getInputValueAction = (data) => ({
    type: GET_MOVIE_INFO,
    payload: data
})

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_INFO:
            return state = {
                src: action.payload.src,
                title: action.payload.title,
                genre: action.payload.genre,
                rating: action.payload.rating,
                repRlsDate: action.payload.repRlsDate,
                runtime: action.payload.runtime,
            }
        default:
            return state;
    }
};

export default reducer;