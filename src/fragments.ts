import { gql } from 'apollo-boost';

export const PRODUCT_FRAGMENT = gql`
  fragment ProductItems on Product {
    productId
    name
    photo
    price
    onSale
    createdAt
    updatedAt
  }
`;
