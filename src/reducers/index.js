import { RECIEVE_MEME, NEW_MEME } from '../Constants/const';
import { combineReducers } from 'redux'

function memes(state = [], action) {
    switch (action.type) {
        case RECIEVE_MEME:
            return action.memes;
        default:
            return state;
    }
}
function myMemeReducer(state = [], action) {
    switch (action.type) {
        case NEW_MEME:
            state = [...state, action.meme]
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    memes,
    myMemes: myMemeReducer
});

export default rootReducer;