// Libraries
import React, {Component} from  'react'
import Link from   'next/link'

// Components
import Container from 'components/Container'

import CTA from 'components/CTA'


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
				
						<Container>
							
						</Container>

					<CTA
						position='left'
						className='background-white'

						headingColor=''
						headingText='This is a heading'

						paraColor=''
						paraText='A web-based platform on a mission to incentivize and promote acts of kindness by giving away cool products and experiences. Do something positive, be kind and get rewarded.'

						image='/static/images/image.png'
					/>

					<CTA
						position='right'
						className='background-white'

						headingColor=''
						headingText='This is a heading'

						paraColor=''
						paraText='A web-based platform on a mission to incentivize and promote acts of kindness by giving away cool products and experiences. Do something positive, be kind and get rewarded.'

						image='/static/images/image.png'
					/>

					<CTA
						position='center'
						className='background-white'

						headingColor=''
						headingText='This is a heading'

						paraColor=''
						paraText='A web-based platform on a mission to incentivize and promote acts of kindness by giving away cool products and experiences. Do something positive, be kind and get rewarded.'

					/>


					</main>
				</div>

		

		)
	}
}
