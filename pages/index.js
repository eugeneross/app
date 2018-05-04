// Libraries
import React, {Component} from  'react'
import Link from   'next/link'

// Components
import Nav from 'components/Nav'
import CTA from 'components/CTA'
import DetailedCTA from 'components/DetailedCTA'
import Points from 'components/Points'
import Button from 'components/Button'

import { PointsCircle } from 'components/SVG/PointsCircle'
import { NumieLogo } from '../components/SVG/Logos';

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

						<Nav
							theme='secondary'
							
						/>

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

					<CTA
						position='small'
						className='background-white'

						headingColor=''
						headingText='This is a heading'

						paraColor=''
						paraText='A web-based platform on a mission to incentivize and promote acts of kindness.'

					/>

					<Points
						headingText='This is the points heading where the title can go'

						visualOne= {<PointsCircle />}
						subHeadingOne='This is a point title'
						paraOne='A web-based platform on a mission to incentivize and promote acts of kindness.'

						visualTwo= {<PointsCircle />}
						subHeadingTwo='This is a point title'
						paraTwo='A web-based platform on a mission to incentivize and promote acts of kindness.'

						visualThree={ <PointsCircle />}
						subHeadingThree='This is a point title'
						paraThree='A web-based platform on a mission to incentivize and promote acts of kindness.'
					/>
					

					<DetailedCTA
						position='left'

						image='/static/images/passport-notification.png'

						headingColor=''
						headingText='Do more with the Special mobile app'

						subHeadingOne='Invite and manage visitors'
						paraOne='With Passport in your pocket, you can easily choose how you’d like to be notified when visitors arrive.'

						subHeadingTwo='Invite and manage visitors'
						paraTwo='With Passport in your pocket, you can easily choose how you’d like to be notified when visitors arrive.'

						subHeadingThree='Invite and manage visitors'
						paraThree='With Passport in your pocket, you can easily choose how you’d like to be notified when visitors arrive.'

					/>


					</main>
				</div>

		

		)
	}
}
