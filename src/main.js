import React from 'react'
import ReactDOM from 'react-dom'

import components from './components'

const {FlipBoard} = components

class ReactAPP extends React.Component {
    render() {
        return (
        <div>
            <FlipBoard />
        </div>
        )
    }
}

ReactDOM.render(<ReactAPP />, document.getElementById('react-app'));