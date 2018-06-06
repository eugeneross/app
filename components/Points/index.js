// Libraries
import React, { Component } from 'react'

// Styles
import styles from './index.sass'

import Container from '../Container'

export default class Points extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  // HOW TO USE
  //
  // <Points
  //   className=' optional classnames '

  //   headingColor=' section heading color '
  //   headingText=' section heading text '

  //   visualOne=' SVG reference '
  //   subheadingOne=' subheading of visual '
  //   paraOne=' paragraph of the visual '

  //   visualTwo=' SVG reference '
  //   subheadingTwo=' subheading of visual '
  //   paraTwo=' paragraph of the visual '

  //   visualThree=' SVG reference '
  //   subheadingThree=' subheading of visual '
  //   paraThree=' paragraph of the visual '
  // />

  render() {
    return (
      <section className={`${styles.points} ${this.props.className ? this.props.className : ''}`}>

        <Container>

          <div className={`${styles.heading} ${this.props.headingColor ? this.props.headingColor : ''}`}>
            <h2>{this.props.headingText}</h2>
          </div>

          <div className='columns'>

            <div className='column is-4'>
              <div className={`${styles.inner}`}>
                <div className={`${styles.visual}`}>
                  {this.props.visualOne}
                </div>
                <div className={`${styles.content}`}>
                  <h3>{this.props.subHeadingOne}</h3>
                  <p>{this.props.paraOne}</p>
                </div>
              </div>
            </div>

            <div className='column is-4'>
              <div className={`${styles.inner}`}>
                <div className={`${styles.visual}`}>
                  {this.props.visualTwo}
                </div>
                <div className={`${styles.content}`}>
                  <h3>{this.props.subHeadingTwo}</h3>
                  <p>{this.props.paraTwo}</p>
                </div>
              </div>
            </div>

            <div className='column is-4'>
              <div className={`${styles.inner}`}>
                <div className={`${styles.visual}`}>
                  {this.props.visualThree}
                </div>
                <div className={`${styles.content}`}>
                  <h3>{this.props.subHeadingThree}</h3>
                  <p>{this.props.paraThree}</p>
                </div>
              </div>
            </div>

          </div>

        </Container>

      </section>
    )
  }
}


