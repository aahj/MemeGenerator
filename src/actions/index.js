import { connect } from 'react-redux';
import { RECIEVE_MEME, NEW_MEME } from '../Constants/const';
import { username, password } from './Secrets';

function recieveMeme(json) {
    const { memes } = json.data;
    return {
        type: RECIEVE_MEME,
        memes
    }
}

function fetchMemesJson() {
    const url = `https://api.imgflip.com/get_memes`
    return fetch(url).then(res => res.json());
}

// handle asynchronous fetch memes from API
export function fetchMeme() {
    return function (dispatch) {
        return fetchMemesJson().then(json => dispatch(recieveMeme(json)))
    }
}

// handle newly MEME
function newMeme(meme) {
    return {
        type: NEW_MEME,
        meme
    }
}

// handle api to post meme and return new created Meme in JSON
const postMemeJson = (params) => {

    params['username'] = username;
    params['password'] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    console.log({ bodyParams });
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/x-wwww-form-urlencoded');
    // headers.append('Accept', 'application/x-wwww-form-urlencoded');    
    // headers.append('Origin','http://localhost:3000');

    return fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/multipart/form-data'
        },
        body: bodyParams
    }).then(res => res.json())
        .catch(err => console.log({ err }))
}

// dispatch postMemeJson
export function createMeme(newly_meme_obj) {
    return function (dispatch) {
        return postMemeJson(newly_meme_obj)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}