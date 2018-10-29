import React, {Component} from 'react'
import Link from 'next/link'

import stylesheet from '../styles/index.sass'

import {
	Main
} from '../elements'

export default class About extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("About Component mounted.")
	}
	render() {
		return (

			<Main>
				<p>Sup about</p>
				<Link href='/'>
					<a>Back</a>
				</Link>
			</Main>

		)
	}
}
