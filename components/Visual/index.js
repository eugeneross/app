// Libraries
import React, { Component } from 'react'

// Styles
import styles from './index.sass'

import Container from '../Container'

export default class Visual extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    // HOW TO USE
    //
    // <Visual
    //     image=' image url '
    //     alt=' image alt text '
    // />

    render() {
        return (
            <div className={`${styles.visual}`}>
                <img src={`${this.props.image}`} alt={this.props.alt}/>
            </div>
        )
    }
}

