import React from 'react';
import Helmet from 'react-helmet';
import Input from '../../Components/Input';
import styled from '../../typed-components';
import Tab from 'src/Components/Tab';

const Container = styled.div``;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
`;

const Form = styled.form``;

const Button = styled.button`
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  background-color: ${props => props.theme.cyanColor};
  color: white;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;

interface IProps {
  countryCode: string;
  phoneNumber: string;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const PhoneLoginPresenter: React.SFC<IProps> = ({
  countryCode,
  phoneNumber,
  onInputChange,
  onSubmit,
  loading,
}) => (
  <Container>
    <Helmet>
      <title>핸드폰인증</title>
    </Helmet>
    <Tab backTo={'/home'} title={'핸드폰인증'} />
    <Title>전화번호를 -없이 입력해주세요</Title>

    <Form onSubmit={onSubmit}>
      <Input
        placeholder={'01025918613'}
        name={'phoneNumber'}
        onChange={onInputChange}
      />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={'white'}>
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </Button>
    </Form>
  </Container>
);

export default PhoneLoginPresenter;
