// Libraries
import styled, { css } from 'styled-components'

import Title from './Title'
import Text from './Text'
import Visual from './Visual'
import Heading from './Heading'
import Content from './Content'

import { media } from '../../../utils'
import colors from '../../../utils/colors'

const Points = styled.section`
  position: relative;
  width: 100%;
  .columns {
    justify-content: center;
    margin: 0 auto;
  }
  .column {
    margin: 2rem 0;
  }
`

Points.Title = Title
Points.Text = Text
Points.Visual = Visual
Points.Heading = Heading
Points.Content = Content

export default Points
