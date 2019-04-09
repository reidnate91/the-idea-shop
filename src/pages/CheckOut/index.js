import React from 'react'

import Cart from '../../components/Cart'

const CART_KEY = `CART`

const getCartItems = () => {
  const raw = localStorage.getItem(CART_KEY)
  if (raw !== null && raw.length > 0) return JSON.parse(raw)
  return []
}

export const addItemToCart = item => {
  const items = getCartItems()
  if items.includes(item)
  save([...items, item])
}


const save = items => {
  const raw = JSON.stringify(items)
  localStorage.setItem(CART_KEY, raw)
}

export default () => {
  const items = getCartItems()

  return (
    <>
      <h1>Cart</h1>
      
      <table>
        <tbody>
        <th name="item">Items</th>
        <th>Price per Unit</th>
        <th>Quantity</th>
        <th>Total</th>
        </tbody>
        </table>
        <Cart items={items} />
            <input name="checkout" type="submit" value="Check-out"/>

    </>
  )
}
