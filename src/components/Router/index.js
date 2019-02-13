import React from 'react'
import { Router } from '@reach/router'

import {
  Home,
  NotFound,
  ProductDetails,
} from '../../pages'

export default () => (
  <Router>
    <Home path="/" />
    <ProductDetails path="/products/:id" />
    <NotFound default/>
  </Router>
)
