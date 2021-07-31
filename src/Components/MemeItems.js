import React, { Component } from 'react';
import { createMeme } from '../actions'
import { connect } from 'react-redux'
import '../styles/index.css';

class MemeItems extends Component {
    constructor() {
        super();
        this.state = {
            hovered: false
        }
    }
    // pass newly object created into newMeme() i.e (action), which will create new Array of objects stated in Reducer
    postMeme() {
        let { text0, text1 } = this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj);
    }

    render() {
        let { meme } = this.props;
        return (
            <div
                className='meme-item'
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                onClick={() => this.postMeme()}
            >
                <img
                    src={meme.url}
                    alt={meme.name}
                    className={this.state.hovered ? 'meme-img darken-img' : 'meme-img'}
                />
                <p className={this.state.hovered ? 'meme-text' : 'no-text'}>{meme.name}</p>
            </div>
        )
    }
}

export default connect(null, { createMeme })(MemeItems);