// Libraries
import React, { Component } from 'react'
import Link from 'next/link'

// Styles
import styles from './index.sass'

export default class LineLink extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    // <LineLink
    //     className=' additional classnames '
    //     href=' use this prop if link is outbound '
    //     link=' use this prop if link is internal'
    //     text=' link text '
    // />

    render() {
        return (
            this.props.href
                ? (
                    <a className={`${styles.line} ${this.props.className}`} target='_blank' href={this.props.href}>
                        {this.props.text}
                    </a>
                ) : (
                    <Link href={this.props.link}>
                        <a className={`${styles.line} ${this.props.className}`}>
                            {this.props.text}
                        </a>
                    </Link>
                )
        )
    }
}


