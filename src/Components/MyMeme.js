import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

class MyMeme extends Component {
    render() {
        return (
            <div>
                {
                    this.props.myMemes.map((meme, index) => {
                        return (
                            <img
                                src={meme.data.url}
                                className='my-meme-img'
                                alt='my-meme'
                                key={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
function mspStateToProp(state) {
    return {
        myMemes: state.myMemes
    }
}
export default connect(mspStateToProp, null)(MyMeme);