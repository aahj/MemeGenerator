import React, { Component } from 'react'
import { connect } from 'react-redux';
import MemeItems from './MemeItems';
import { Form, FormLabel, FormGroup, FormControl } from 'react-bootstrap'
import MyMeme from './MyMeme';
import '../styles/index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            maxLimit: 10,
            text0: '',
            text1: ''
        }
    }
    render() {
        let { maxLimit } = this.state;
        return (
            <div>
                <h2><u>Welcome Folks to our Meme Generator!</u></h2>
                {/* <MyMeme /> */}
                <h4 className='py-3'><i>Write some text...</i></h4>
                <div className='pb-3'>
                    <Form>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <FormGroup>
                                    <FormLabel>Top:</FormLabel>
                                    <FormControl
                                        type='text'
                                        onChange={e => this.setState({ text0: e.target.value })}
                                    />
                                </FormGroup>
                            </div>
                            <div className='col-md-6 col-12'>
                                <FormGroup>
                                    <FormLabel>Bottom:</FormLabel>
                                    <FormControl
                                        type='text'
                                        onChange={e => this.setState({ text1: e.target.value })}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                    </Form>
                </div>
                {
                    // The slice() method returns selected elements in an array, as a new array.

                    this.props.memes.slice(0, maxLimit).map((meme, index) => {
                        return (
                            <MemeItems
                                key={index}
                                meme={meme}
                                text0={this.state.text0}
                                text1={this.state.text1}
                            />
                        )
                    })
                }
                <br />
                <button
                    className='my-4 btn btn-outline-light btn-lg'
                    onClick={() => this.setState({ maxLimit: maxLimit + 10 })}>Click to Load More</button>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return state;
}

export default connect(mapStateToProp, null)(App);