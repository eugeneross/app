import styled from 'styled-components'

import { media } from '../utils/breakpoints'

import { Column as BloomerColumn } from 'bloomer'

const Column = styled(BloomerColumn)`

    &&{
        padding: 0;

        ${media.tablet`
            flex-wrap: wrap;
            align-items: center;
            display: flex;
        `}

    }

`

export default Column
