import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;

  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  align-self: center;
  text-align-last: center;
`;

const Cart = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  width: 80vw;
  height: 40vh;
  background: ${props => props.theme.cyanColor};

  &:nth-child(3) {
  }
`;

const List = styled.div``;

const Item = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;

  &:first-child {
    font-weight: 900;
    font-size: 20px;
    align-self: flex-start;
    display: grid;
  }
`;

const Name = styled.div`
  text-align-last: center;
`;
const Price = styled.div`
  text-align-last: center;
`;
const Amount = styled.div`
  text-align-last: center;
`;

const Total = styled.div`
  display: grid;
  font-size: 20px;
  font-weight: 900;
  text-align-last: right;
`;

class CartPresenter extends React.Component<any> {
  public render() {
    console.log('카트');
    console.log(this.props.cart);

    const getTotalPrice = () => {
      // tslint:disable-next-line
      let totalprice = 0;
      const cart = this.props.cart;
      // tslint:disable-next-line
      for (let i = 0; i < cart.length; i++) {
        totalprice += cart[i].price * cart[i].cnt;
      }
      return totalprice;
    };
    console.log(this.props.cart);

    return (
      <>
        <Helmet>
          <title>장바구니</title>
        </Helmet>
        <Container>
          <Cart>
            <Title>장바구니</Title>
            <List>
              <Item>
                <Name>상품명</Name>
                <Price>가격</Price>
                <Amount>갯수</Amount>
              </Item>

              {this.props.cart.map(product => (
                <Item key={product.productId}>
                  <Name>{product.name}</Name>
                  <Price>{product.price}</Price>
                  <Amount>{product.cnt}</Amount>
                </Item>
              ))}
            </List>
            <Total>
              총 가격
              {getTotalPrice()}원
            </Total>
          </Cart>
        </Container>
      </>
    );
  }
}
export default CartPresenter;
