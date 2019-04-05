import React from 'react';
import Helmet from 'react-helmet';
import styled from '../../typed-components';
import Tab from 'src/Components/Tab';
import Input from 'src/Components/Input';
import { Link } from 'react-router-dom';
import SearchPostcode from 'src/Components/SearchPostcode';

const Container = styled.div`
  display: grid;

  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  align-self: center;
  text-align-last: center;
`;

const Cart = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr 5fr;
  grid-template-columns: 1fr;
  justify-content: center;
  width: 90vw;
  height: 81vh;
  background: ${props => props.theme.cyanColor};

  &:nth-child(3) {
  }
`;

const List = styled.div``;

const Item = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
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
const Result = styled.div`
  display: grid;
  grid-template-areas: 'total postcode';
  justify-content: space-between;
`;
const Total = styled.div`
  display: grid;
  font-size: 20px;
  font-weight: 900;
  grid-area: 'total';
`;

const PostCode = styled.div`
  display: grid;
  font-size: 20px;
  font-weight: 900;
  grid-area: 'postcode';
`;
const InputGroup = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 80vw;
`;
const Order = styled.div`
  position: fixed;
  width: 100px;
  height: 40px;
  background: ${props => props.theme.cyanColor};
  right: 3vw;
  bottom: 1vh;
  display: grid;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  cursor: pointer;
  z-index: 10;
`;

class ResultPresenter extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      postDisplay: false,
      fullAddress: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange(fullAddress) {
    this.setState({ fullAddress: `${fullAddress}` });
    console.log(this.state.fullAddress);
  }

  public render() {
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
    const getSendData = () => {
      const cart = this.props.cart;
      // 만들 문구 ~등 3가지 상품 00000원이 000주소로 배달됩니다.
      const data = `${cart[0].name}등 ${
        cart.length
      }가지 상품 ${getTotalPrice()}원 배달예정`;
      return data;
    };
    return (
      <>
        <Helmet>
          <title>Verify Phone | Number</title>
        </Helmet>
        <Tab backTo={'/phone-login'} title={'주문상품확인'} />
        <Container>
          <Link
            to={{
              pathname: '/payment',
              state: {
                phoneNumber: this.props.phoneNumber,
                message: getSendData(),
              },
            }}>
            <Order>주문하기</Order>
          </Link>
          <SearchPostcode
            postDisplay={this.state.postDisplay}
            handleChange={this.handleChange}
          />
          <Cart>
            <Title>{this.props.phoneNumber.substring(3)} 님의 주문목록</Title>
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
            <Result>
              <Total>총 가격 {getTotalPrice()}원</Total>
              <PostCode
                onClick={() => {
                  this.setState({ postDisplay: !this.state.postDisplay });
                }}>
                주소검색
              </PostCode>
            </Result>
            <InputGroup onClick={getSendData}>
              성명 <Input name={'name'} /> 거래수단
              <select>
                <option value={'cash'}>현금</option>
                <option value={'bank'}>계좌이체</option>
              </select>
              주소 <Input name={'address'} value={this.state.fullAddress} />
              상세주소 <Input name={'detailAddress'} />
            </InputGroup>
          </Cart>
        </Container>
      </>
    );
  }
}

export default ResultPresenter;
