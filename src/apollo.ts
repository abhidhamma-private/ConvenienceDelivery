import ApolloClient, { Operation } from 'apollo-boost';
import gql from 'graphql-tag';
const client = new ApolloClient({
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt')),
      },
      cart: [],
    },
    resolvers: {
      Mutation: {
        logUserIn: (_, { token }, { cache }) => {
          localStorage.setItem('jwt', token);
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true,
              },
            },
          });
          return null;
        },
        logUserOut: (_, __, { cache }) => {
          localStorage.removeItem('jwt');
          cache.writeData({
            data: {
              __typename: 'Auth',
              isLoggedIn: false,
            },
          });
          return null;
        },
        addProduct: (_, variables, { cache, getCacheKey }) => {
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
        removeProduct: (_, variables, { cache, getCacheKey }) => {
          // 1.캐시에 들어간 키로 아이디를 받는다.
          const productOne = variables.product;
          console.log('토글프로덕트id');
          console.log(productOne);

          const cartQuery = gql`
            {
              cart @client {
                productId
                name
                price
              }
            }
          `;

          // 3.받은 프로덕트 캐시에서 삭제한다.
          const { cart } = cache.readQuery({ query: cartQuery });

          // const removedcart = cart.filter((product, cartIndex, oldcart) => {
          //   return (
          //     cartIndex ===
          //     oldcart.findIndex((sameproduct, sameIndex) => {
          //       console.log('삭제할인덱스');
          //       console.log(sameIndex);
          //       return sameproduct.productId === product.productId;
          //     })
          //   );
          // });
          const idx = cart.findIndex(
            product => product.productId === productOne.productId
          );
          console.log('idx');
          console.log(idx);
          cart.splice(idx, 1);

          cache.writeData({
            data: {
              cart: [...cart],
            },
          });

          console.log('리졸버cart');
          console.log(cart);
          return null;
        },
      },
    },
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        'X-JWT': localStorage.getItem('jwt') || '',
      },
    });
  },
  uri: 'http://localhost:4000/graphql',
});

export default client;
