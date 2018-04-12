// Libraries
import React, {Component} from  'react'
import Link from   'next/link'

//Containers
import Layout from 'containers/Layout'

// Components
import Button from 'components/Button'

export default class Index extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("Index Component mounted.")
	}
	render() {
		return (

			<div>

				<Layout>
					<main>
					<p>Sup index</p>
					<Link href='/about'><a>About</a></Link>
					<Button 
						className='book'
						text="I'm a button"
						link='/about'
					/>
					</main>
				</Layout>

			</div>

		)
	}
}
