import React from 'react'
import Products from '../components/Products'
import Product from '../components/Product'

import CheckOut from './CheckOut'
export { CheckOut }

export const Home = () => (
  <>
    <h1>Home</h1>
    <Products />
  </>
)

export const ProductDetails = props => (
  <>
    <div>
      <a href="/">Back</a>
    </div>
    <Product id={props.id} />
  </>
)

export const NotFound = () => (
  <>
    <h1>404... Not Found!</h1>
  </>
)
