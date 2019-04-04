import React from 'react'
import { Router } from '@reach/router'

import {
  Home,
  NotFound,
  ProductDetails,
  CheckOut
} from '../../pages'

export default () => (
  <Router>
    <Home path="/" />
    <ProductDetails path="/products/:id" />
    <CheckOut path="/checkout" />
    <NotFound default />
  </Router>
)
