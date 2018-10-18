import a from './method/a'
import b from './method/b'
import React from 'react'
import ReactDOM from 'react-dom'

class ReactAPP extends React.Component {
    render() {
        const val = a()+b(3)
        return (<div>{val}</div>)
    }
}

ReactDOM.render(<ReactAPP />, document.getElementById('react-app'));