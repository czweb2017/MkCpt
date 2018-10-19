import a from './methods/a'
import b from './methods/b'
import React from 'react'
import ReactDOM from 'react-dom'

import components from './components'

const {FlipBoard} = components

class ReactAPP extends React.Component {
    render() {
        const val = a()+b(3)
        return (
        <div>
            <div>{val}</div>
            <FlipBoard />
            <FlipBoard />
            <FlipBoard />
        </div>
        )
    }
}

ReactDOM.render(<ReactAPP />, document.getElementById('react-app'));