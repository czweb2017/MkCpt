import React, { Component } from 'react';
import './index.css'

class FlipBoard extends Component {

    constructor (props) {
        super(props)
        this.state = {
            className: 'hidden_flip_board',
            hidden: true
        }
        this.toggleFlip = this.toggleFlip.bind(this)
        this.exchange = this.exchange.bind(this)
    }

    hello () {
        console.log('hello')
    }

    exchange(flag) {
        if(!flag) {
            this.setState({
                className: 'hidden_flip_board',
                hidden: true
            })
        }else{
            this.setState({
                className: 'showed_flip_board',
                hidden: false
            })
        }
    }

    toggleFlip () {
        this.exchange(this.state.hidden)
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({className:'showed_flip_board'})
        //     this.hello()
        // }, 3000)
    }

    render() {
        const {option} = this.props

        const style = {
            width: '200px',
            height: '200px',
            color: '#ddd',
            backgroundColor: '#888',
            position:'relative',
            transition: 'all 1s'
        }

        return (
            <div style={style} className={this.state.className}>
                FlipBoard
                <button onClick={this.toggleFlip}>flip</button>
            </div>
        );
    }
}

export default FlipBoard;
