import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import React from 'react';
import styled from 'styled-components';
const CART_QUERY = gql`
  {
    cart @client {
      productId
      name
      price
    }
  }
`;

const Circle = styled.input`
  all: unset;
  background: ${props => props.theme.cyanColor};
  border-radius: 1.2rem;
  cursor: pointer;
  color: #fff;
  font-weight: 550;
  width: 1.3rem;
  position: absolute;
  margin: -13px -14px;
  border: 1px solid #fff;
  line-height: 21px;
`;
export default () => (
  <Query query={CART_QUERY}>
    {({ loading, error, data }) => {
      console.log('카트넘버');

      console.log(data);

      return (
        <Circle value={data.cart.length === 0 ? '0' : `${data.cart.length}`} />
      );
    }}
  </Query>
);
