import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.cyanColor};
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: 550;
  width: 12vw;
  height: 4vh;
  line-height: 0.875rem;
  font-size: 0.875rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: space-around;
  align-items: center;

  > * {
    display: grid;
    align-items: center;
    height: 100%;
  }
`;
const Plus = styled.div`
  font-weight: 900;
  line-height: 1.5rem;
  font-size: 1.5rem;
`;
const Count = styled.div`
  font-weight: 900;
  line-height: 1.5rem;
  font-size: 1.5rem;
`;
const Minus = styled.div`
  font-weight: 900;
  line-height: 1.5rem;
  font-size: 1.5rem;
`;

class QuantityInput extends React.Component<any, any, any> {
  constructor(props) {
    super(props);
    this.state = {
      ProductCount: this.props.ProductCount,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange(e) {
    this.props.onProductCountChange(document.querySelector('Count'));
  }
  public render() {
    console.log(this.state);
    console.log(this.props);
    console.log('하위');

    return (
      <Container>
        <Minus onClick={this.MinusCount}>-</Minus>
        <Count>{this.state.ProductCount}</Count>
        <Plus onClick={this.PlusCount}>+</Plus>
      </Container>
    );
  }
  public MinusCount = () => {
    this.setState({ ProductCount: this.state.ProductCount - 1 });
    this.props.handleChange(this.state.ProductCount - 1);
  };
  public PlusCount = () => {
    this.setState({ ProductCount: this.state.ProductCount + 1 });
    this.props.handleChange(this.state.ProductCount + 1);
  };
}

export default QuantityInput;
