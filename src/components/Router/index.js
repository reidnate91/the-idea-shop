import React from 'react'
import { Router } from '@reach/router'

import {
  Home,
  NotFound
} from '../../pages'

export default () => (
  <Router>
    <Home path="/" />
    <NotFound default/>
  </Router>
)
