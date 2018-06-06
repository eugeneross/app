// Libraries
import React, { Component } from 'react'
import Link from 'next/link'

// Styles
import styles from './index.sass'

export default class Button extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    // <Button 
    //     className=' additional classnames '
    //     href=' use this prop if link is outbound '
    //     link=' use this prop if link is internal'
    //     text=' button text '
    // />

    render() {
        return (
            this.props.href
                ? (
                    <a className={`${styles.btn} ${this.props.className}`} target='_blank' href={this.props.href}>
                        {this.props.text}
                    </a>
                ) : (
                    <Link href={this.props.link}>
                        <a className={`${styles.btn} ${this.props.className}`}>
                            {this.props.text}
                        </a>
                    </Link>
                )
        )
    }
}


