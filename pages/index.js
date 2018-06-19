// Libraries
import React, { Component } from 'react'
import Link from 'next/link'

// Components
import CTA from 'components/blocks/CTA'
import Points from 'components/blocks/Points'

import Container from 'components/elements/Container'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Index Component mounted.')
  }
  render() {
    return (
      <div>
        <main>
          <CTA left>
            <Container>
              <div className="columns">
                <div className="column is-6">
                  <CTA.Visual>
                    <img src="/static/images/image.png" />
                  </CTA.Visual>
                </div>
                <div className="column is-6">
                  <CTA.Content>
                    <CTA.Title>This is a call to action title on.</CTA.Title>

                    <CTA.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas id tortor quis nunc consequat semper ac sed eros.
                      Mauris interdum risus erat, nec hendrerit lectus dignissim
                      vel.
                    </CTA.Text>

                    <CTA.Button tertiary>Button</CTA.Button>
                  </CTA.Content>
                </div>
              </div>
            </Container>
          </CTA>

          <CTA right>
            <Container>
              <div className="columns">
                <div className="column is-6">
                  <CTA.Visual>
                    <img src="/static/images/image.png" />
                  </CTA.Visual>
                </div>
                <div className="column is-6">
                  <CTA.Content>
                    <CTA.Title>This is a call to action title on.</CTA.Title>

                    <CTA.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas id tortor quis nunc consequat semper ac sed eros.
                      Mauris interdum risus erat, nec hendrerit lectus dignissim
                      vel.
                    </CTA.Text>

                    <CTA.Button>Button</CTA.Button>
                  </CTA.Content>
                </div>
              </div>
            </Container>
          </CTA>

          <CTA center background="black">
            <Container>
              <div className="columns">
                <div className="column is-8">
                  <CTA.Title>This is a call to action title on.</CTA.Title>

                  <CTA.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas id tortor quis nunc consequat semper ac sed eros.
                    Mauris interdum risus erat, nec hendrerit lectus dignissim
                    vel.
                  </CTA.Text>

                  <CTA.Button>Learn More About</CTA.Button>
                </div>
              </div>
            </Container>
          </CTA>

          <Points>
            <Container>
              <Points.Heading>
                <Points.Title>Heading Title</Points.Title>
              </Points.Heading>

              <div className="columns">
                <div className="column is-4">
                  <Points.Content>
                    <Points.Visual>
                      <img src="/static/images/points-circle.svg" />
                    </Points.Visual>

                    <Points.Title>Title</Points.Title>

                    <Points.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas id tortor quis nunc consequat semper ac sed eros.
                    </Points.Text>
                  </Points.Content>
                </div>

                <div className="column is-4">
                  <Points.Content>
                    <Points.Visual>
                      <img src="/static/images/points-circle.svg" />
                    </Points.Visual>

                    <Points.Title>Title</Points.Title>

                    <Points.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas id tortor quis nunc consequat semper ac sed eros.
                    </Points.Text>
                  </Points.Content>
                </div>

                <div className="column is-4">
                  <Points.Content>
                    <Points.Visual>
                      <img src="/static/images/points-circle.svg" />
                    </Points.Visual>

                    <Points.Title>Title</Points.Title>

                    <Points.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas id tortor quis nunc consequat semper ac sed eros.
                    </Points.Text>
                  </Points.Content>
                </div>
              </div>
            </Container>
          </Points>

          {/*
					


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

					/> */}
        </main>
      </div>
    )
  }
}
