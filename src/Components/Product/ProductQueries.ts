import { gql } from 'apollo-boost';

export const PRODUCT_QUERY = gql`
  query productItems {
    ProductItems {
      ok
      error
      products {
        productId
        name
        photo
        price
        onSale
        createdAt
        updatedAt
      }
    }
  }
`;

export const PRODUCTONE_QUERY = gql`
  query productItem($id: ID!) {
    ProductItem(productId: $id) {
      ok
      error
      product {
        name
        productId
      }
    }
  }
`;

export const ADD_CART = gql`
  mutation addCart($product: Product!) {
    addProduct(product: $product) @client
  }
`;

export const REMOVE_CART = gql`
  mutation removeCart($product: Product!) {
    removeProduct(product: $product) @client
  }
`;
