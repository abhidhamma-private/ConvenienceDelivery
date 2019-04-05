import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import bgImage from '../../images/bg.png';
import styled from '../../typed-components';

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),
    url(${bgImage});
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  height: 110px;
  background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`;

const Title = styled.h1``;

const Content = styled.div``;

const Subtitle = styled.h2`
  font-size: 20px;
`;

const FakeInput = styled.div`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 300;
`;

const PhoneLogin = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const Grey = styled.span`
  color: ${props => props.theme.greyColor};
  margin-left: 10px;
`;

class PaymentPresenter extends React.Component<any> {
  public componentDidMount() {
    this.props.mutation();
  }
  public render() {
    return (
      <Container>
        <Helmet>
          <title>Login | Nuber</title>
        </Helmet>
        <Logo>
          <Title>주문완료</Title>
        </Logo>

        <Content>
          <Link to={'/home'}>
            <PhoneLogin>
              <Subtitle>{this.props.message}</Subtitle>
              <FakeInput>
                <Grey>주문이 접수되었습니다.</Grey>
              </FakeInput>
            </PhoneLogin>
          </Link>
        </Content>
      </Container>
    );
  }
}

export default PaymentPresenter;
