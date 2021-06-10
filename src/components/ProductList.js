import React from 'react'
import styled from 'styled-components'
import Product from './Products'

const ProductList = ({productList}) => {

  return (
    <ProductBox>
      {
        productList.map((item) => {
          return <Product key={item.key} product={item} />
        })
      }
    </ProductBox>
  )
}

export default ProductList

const ProductBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 2rem;
`