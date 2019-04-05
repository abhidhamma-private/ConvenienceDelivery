import React from 'react';
import Button from 'src/Components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartNumber from '../CartNumber';
const Container = styled.div`
  width: 100vw;
  height: 8vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(10vw, 1fr));
  text-align: center;
`;
const Search = styled.div``;
const Brand = styled.div`
  font-weight: 900;
  padding: 1rem;
  font-family: Inconsolata;
`;
const Cart = styled.div``;

const Nav = styled.div`
  width: 100vw;
  height: 10vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(10vw, 1fr));
  text-align: center;
  margin-bottom: 1vh;
  > * {
    display: grid;
    align-items: center;
    height: 100%;
    border-bottom: 3px solid white;
    > div {
      color: #495057;
      line-height: 1.25rem;
      font-size: 1.25rem;
    }
  }
  > :hover {
    border-bottom: 3px solid ${props => props.theme.cyanColor};
    color: ${props => props.theme.cyanColor};
  }
`;

const Order = styled.div`
  position: fixed;
  width: 100px;
  height: 50px;
  background: ${props => props.theme.cyanColor};
  right: 3vw;
  bottom: 3vh;
  display: grid;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  cursor: pointer;
  z-index: 10;
`;
const Header: React.SFC = () => (
  <>
    <Link to="/login">
      <Order>주문하기</Order>
    </Link>
    <Container>
      <Search>
        <Link to="/search">
          <Button value={'상품검색'} />
        </Link>
      </Search>
      <Brand>
        <Link to="/home">
          GS25
          <br />
          Delivery
        </Link>
      </Brand>
      <Cart>
        <Link to="/cart">
          <Button value={'장바구니'} />
          <CartNumber />
        </Link>
      </Cart>
    </Container>
    <Nav>
      <Link to="/tag">
        <div>태그별상품</div>
      </Link>
      <Link to="/hot">
        <div>인기상품</div>
      </Link>
      <Link to="/new">
        <div>새로나온상품</div>
      </Link>
    </Nav>
  </>
);
export default Header;
