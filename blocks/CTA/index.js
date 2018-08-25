// Libraries
import styled, { css } from 'styled-components'
// import { applyStyleModifiers } from 'styled-components-modifiers';

import Title from './Title'
import Text from './Text'
import Visual from './Visual'
import Content from './Content'
import Button from './Button'

import { media } from '../../../utils'
import colors from '../../../utils/colors'
// import modifiers from '../../../utils/modifiers';

const CTA = styled.section`
  margin-right: auto;
  margin-left: auto;
  text-align: left;

  ${p =>
    p.center &&
    css`
      text-align: center;
      .column {
        margin: 0 auto;
        max-width: 37.5rem;
      }
    `}

  ${media.tablet`
    
    ${props =>
      (props.left || props.right) &&
      css`
        text-align: left;
        color: red;
      `} /* Find out why this renders values twice */
   
     ${p =>
       p.left &&
       css`
         .columns {
           flex-direction: row-reverse;
           .column {
             &:nth-child(even) {
               padding-right: 2.5rem;
             }
             &:nth-child(odd) {
               padding-left: 2.5rem;
               ${'' /* justify-content: flex-start; */};
             }
           }
         }
       `}

       ${p =>
         p.right &&
         css`
           .columns {
             flex-direction: row;
             .column {
               &:nth-child(even) {
                 padding-left: 2.5rem;
                 ${'' /* justify-content: flex-end; */};
               }
               &:nth-child(odd) {
                 padding-right: 2.5rem;
               }
             }
           }
         `}

  `}
${'' /* ${applyStyleModifiers(modifiers)} */}
`

CTA.Title = Title
CTA.Text = Text
CTA.Visual = Visual
CTA.Content = Content
CTA.Button = Button

export default CTA
