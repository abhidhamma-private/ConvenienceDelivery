import React from 'react';
import Helmet from 'react-helmet';
import { Link, RouteComponentProps } from 'react-router-dom';
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

interface IProps extends RouteComponentProps<any> {}

const OutHomePresenter: React.SFC<IProps> = () => (
  <Container>
    <Helmet>
      <title>Login | Nuber</title>
    </Helmet>
    <Logo>
      <Title>GS25 서귀법환점 배달서비스</Title>
    </Logo>

    <Content>
      <Link to={'/phone-login'}>
        <PhoneLogin>
          <Subtitle>핸드폰 인증만으로 편의점 상품을 배달 받아보세요!</Subtitle>
          <FakeInput>
            <Grey>핸드폰 인증하기</Grey>
          </FakeInput>
        </PhoneLogin>
      </Link>
    </Content>
  </Container>
);

export default OutHomePresenter;
