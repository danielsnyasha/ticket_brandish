import React from 'react'

const ProductDetails = ( { params } : {params: { productId: string}}) => {
  return (
    <div>ProductDetails for { params.productId }</div>
  )
}

export default ProductDetails