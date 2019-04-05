import { gql } from 'apollo-boost';
import { PRODUCT_FRAGMENT } from 'src/fragments';

export const HOME_QUERY = gql`
  query productItems {
    ProductItems {
      ok
      error
      products {
        ...ProductItems
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

// {
//   categories {
//     id
//     name
//   }
//   onSale: products(where: { onSale: true }) {
//     ...ProductItems
//   }
//   allProducts: products(where: { onSale: false }) {
//     ...ProductItems
//   }
// }
