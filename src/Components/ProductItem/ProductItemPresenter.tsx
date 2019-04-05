import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import QuantityInput from '../QuantityInput';
import { toast } from 'react-toastify';

const Container = styled.div`
  height: 40vh;
  border: 3px solid #e9e9e9;
  box-shadow: none;
  background: #ffffff;
  display: grid;
  grid-template-rows: 70% 10% 20%;
  grid-template-columns: 100%;
  > * {
    display: grid;
    justify-content: center;
  }
  &:hover {
    border: 3px solid ${props => props.theme.boldCyanColor};

    > :nth-child(2) {
      color: ${props => props.theme.boldCyanColor};
      font-weight: bold;
    }
  }
`;
const ThumbnailWraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
`;
const Thumbnail = styled.img`
  -o-object-fit: cover;
  object-fit: contain;
  display: block;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Info = styled.div``;
const Order = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  > * {
    display: grid;
    align-self: center;
    text-align-last: center;
    margin: 1vw;
  }
`;

class ProductItemPresenter extends React.Component<any, any, any> {
  constructor(props) {
    super(props);
    this.state = {
      ProductCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange(ProductCount) {
    this.setState({ ProductCount: parseInt(`${ProductCount}`, 10) });
  }
  public render() {
    console.log(this.state);
    console.log(this.props);
    console.log('상위');

    return (
      <Container key={this.props.key}>
        <ThumbnailWraper>
          <Thumbnail src={this.props.photoUrl} />
        </ThumbnailWraper>
        <Info>
          {this.props.name} {this.props.price}원
        </Info>
        <Order>
          <Button onClick={this.addOrDeleteToCart} value={'담기/빼기'} />
          <QuantityInput
            ProductCount={this.state.ProductCount}
            handleChange={this.handleChange}
          />
        </Order>
      </Container>
    );
  }

  public addOrDeleteToCart = () => {
    const ProductCount = this.state.ProductCount;
    if (ProductCount === 0) {
      toast.warn('빼거나 담을 갯수를 입력해주세요.');
    } else if (ProductCount > 0) {
      for (let i = 1; i <= ProductCount; i++) {
        this.props.addCart();
      }
      toast.success(
        `${this.props.name} ${ProductCount}개가 장바구니에 담겼습니다.`
      );
    } else if (ProductCount < 0 && JSON.stringify(this.props.cart) === '[]') {
      toast.warn(`장바구니에 ${this.props.name}이(가) 없습니다.`);
    } else if (ProductCount < 0) {
      console.log('remove 실행');
      const absProductCount = Math.abs(ProductCount);
      for (let i = 1; i <= absProductCount; i++) {
        console.log(`${i} 번쨰 삭제`);
        this.props.removeCart();
      }
      toast.success(
        `${this.props.name} ${absProductCount}개가 장바구니에서 빠졌습니다.`
      );
    }
  };
}
export default ProductItemPresenter;
