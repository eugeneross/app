// Libraries
import React, { Component } from 'react'

// Styles
import styles from './index.sass'

export default class Container extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    // <Container
    //     className=' addtional classnames '
    // />
    //
    // Will mostly be used as wrapper component
    //<Container></Container>
    //

    render() {
        return (
            <div className={`${styles.container} ${this.props.className ? this.props.className : ''}`}>
                {this.props.children}
            </div>
        )
    }
}


