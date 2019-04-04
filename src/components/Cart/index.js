import React, {
  useState
} from 'react'

export default ({ items = [] }) => {

  return (
    <>
      {items.map((item, i) => (<div key={i}>{item.name}</div>))}
    </>
  )
}