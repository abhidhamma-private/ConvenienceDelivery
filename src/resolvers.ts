import { gql } from 'apollo-boost';

export const defaults = {
  cart: [],
};
export const resolvers = {
  Mutation: {
    toggleProduct: (_, variables, { cache, getCacheKey }) => {
      // 1.캐시에 들어간 키로 아이디를 받는다.
      const productOne = variables.product;
      console.log('토글프로덕트id');
      console.log(productOne);

      // const fragment = gql`
      //   query productItem {
      //     ProductItem(productId: $id) {
      //       ok
      //       error
      //       product {
      //         name
      //         productId
      //       }
      //     }
      //   }
      // `;

      // // 2.들어간아이디로 프로덕트를 받는다.
      // const product = cache.readQuery({ fragment, id: 123 });

      // console.log('걍프로덕트');
      // console.log(product);
      const cartQuery = gql`
        {
          cart @client {
            productId
            name
            price
          }
        }
      `;

      // 3.받은 프로덕트 캐시에 쓴다
      const { cart } = cache.readQuery({ query: cartQuery });

      cache.writeData({
        data: {
          cart: [...cart, productOne],
        },
      });

      console.log('리졸버cart');
      console.log(cart);
      return null;
    },
  },
};
