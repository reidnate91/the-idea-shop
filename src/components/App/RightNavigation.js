import React from 'react'
import styled from 'styled-components'

import {
  DEFAULT_PADDING,
  SECONDARY,
} from '../../styles'

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 33%;
  min-width: 200px;
  padding: ${DEFAULT_PADDING};
  background: ${SECONDARY.alt300}
`

export default () => (
  <Aside>
    <p>This is the shopping cart details pane.</p>
  </Aside>
)
