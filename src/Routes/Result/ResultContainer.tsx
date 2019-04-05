import React from 'react';
import ResultPresenter from './ResultPresenter';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
const CART_QUERY = gql`
  {
    cart @client {
      productId
      name
      price
    }
  }
`;
class ResultContainer extends React.Component<any> {
  public render() {
    return (
      <Query query={CART_QUERY}>
        {({ data }) => {
          console.log('cartpresenter');

          console.log(data);
          // data.id가 같은게 있으면 거기에 cnt를 추가해서 +1해준다.
          // 그렇게 돌면서 새로운 데이터를 만들어낸다.
          console.log(data.cart);
          // tslint:disable-next-line
          let cart = data.cart;
          // 1.카트의 product에 cnt를 준다.

          // tslint:disable-next-line
          let addCntCart = cart.map(product => {
            const cnt = 0;
            product = { ...product, cnt };
            return product;
          });
          console.log('addCntCart');
          console.log(addCntCart);

          // 2.중복되는 id의 product가 있으면 그 product를 삭제하고
          // 첫번째 product의 cnt를 증가시킨다.
          // 그러면 product가 다 사라지고 하나만 남을것이다.

          // tslint:disable-next-line
          let sortCart = addCntCart.filter(
            (product, addCntCartIndex, oldcart) => {
              console.log('addCntCartIndex');
              console.log(addCntCartIndex);

              return (
                addCntCartIndex ===
                oldcart.findIndex((sameproduct, sameIndex) => {
                  // tslint:disable-next-line
                  console.log('sameIndex');
                  console.log(sameIndex);

                  return sameproduct.productId === product.productId;
                })
              );
            }
          );

          // 3.이것을 모든 중복되는 product에 반복한다.

          // tslint:disable-next-line
          let oldCart = addCntCart;
          // tslint:disable-next-line
          oldCart.map(product => {
            // tslint:disable-next-line
            for (let i = 0; i < sortCart.length; i++) {
              if (sortCart[i].productId === product.productId) {
                sortCart[i].cnt += 1;
              }
            }
          });
          return (
            <ResultPresenter
              cart={sortCart}
              phoneNumber={this.props.location.state.phoneNumber}
            />
          );
        }}
      </Query>
    );
  }
}
export default ResultContainer;
