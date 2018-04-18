// Libraries
import React, {Component} from  'react'
import Link from   'next/link'

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

					<main>
					<p>Sup index</p>
					<Link href='/about'><a>About</a></Link>
					
						<Button 
							className='color-primary'
							text="I'm a button"
							href='/about'
						/>


					</main>
				</div>

		

		)
	}
}
