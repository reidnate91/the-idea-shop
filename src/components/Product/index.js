import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

const Product = styled.section`
  display: flex;
  flex-direction: column;

  [name='price'] {
    font-size: 200%;
    padding: 0;
    margin: 0;
  }

  [name='product-title'] {
    padding: 0;
    font-size: 200%;
  }

  [name='photo'] {
    padding: 16px;

    img {
      width: 100%;
      height: 100%;
      max-width: 600px;
      min-width: 300px;
      max-height: 600px;
      min-height: 300px;
    }
  }

  [name='product-details'] {
    padding: 16px;
  }

  [name='product-formatting'] {
    display: flex;
    flex-direction: row;
  }
`

const PRODUCT_QUERY = gql`
  query($id: ID) {
    product(id: $id) {
      id
      name
      description
      photoUrl
      price
      orders {
        id
      }
    }
  }
`

export default ({ id }) => (
  <Query query={PRODUCT_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>{error}</div>
      const { id, name, description, photoUrl, price } = data.product

      return (
        <Product key={id}>
          <h2 name="product-title">{name}</h2>
          <section name="product-formatting">
            <div name="photo">
              <img src={photoUrl} alt={name} />
            </div>
            <section name="product-details">
              <h4 name="price">$ {price}</h4>
              <p name="description">{description}</p>
            </section>
          </section>
        </Product>
      )
    }}
  </Query>
)
