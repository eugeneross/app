import styled from 'styled-components'
import { media } from '../../utils/breakpoints';
import colors from '../../utils/colors';

import Edit from './Edit'
import Names from './Names'
import Nickname from './Nickname'
import Number from './Number'
import Tag from './Tag'
import Type from './Type'
import Inner from './Inner'
import Source from './Source'
import IconContainer from './IconContainer'
import Column from './Column'
import Columns from './Columns'
import List from './List'


const Account = styled.div`
background: ${colors.white};
border-bottom: 1px solid ${colors.lightGray};
width: 100%;

${media.tablet`
  background: #FEFEFE;
  box-shadow: 2px 2px 5px rgba(14, 30, 37, 0.03);
  border: 1px solid #BFCFE3 !important;
  border-radius: .25rem;
  border-bottom: none;
`}
`

Account.Edit = Edit
Account.Nickname = Nickname
Account.Names = Names
Account.Number = Number
Account.Tag = Tag
Account.Type = Type
Account.Inner = Inner
Account.Source = Source
Account.IconContainer = IconContainer
Account.Column = Column
Account.Columns = Columns
Account.List = List
 
export default Account