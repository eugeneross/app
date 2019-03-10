import styled, { css } from 'styled-components'
// import is from 'is-styled'

import { Columns as BloomerColumns } from 'bloomer'
import { media } from '../utils/breakpoints';

const Columns = styled(BloomerColumns)`

    && {
        width: 100%;
        margin: 0;
        display: flex;
        
    }

    &:last-child{
        margin-bottom: 0 !important;
    }

`

export default Columns