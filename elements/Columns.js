import styled from 'styled-components'

import { media } from '@utils'

import { Columns as BloomerColumns } from 'bloomer'

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