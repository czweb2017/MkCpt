import React, { Component } from 'react';
import './index.less'

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

    render() {
        const {option} = this.props
        const {className} = this.state

        let currentStyle = {}

        if(option) {
            if(option.style) {
                currentStyle = option.style
            }
        }

        return (
        <div className={'flip_board '+className} style={currentStyle}>
                FlipBoard
                <div onClick={this.toggleFlip} className="toggle_button"></div>
        </div>)
    }
}

export default FlipBoard;
