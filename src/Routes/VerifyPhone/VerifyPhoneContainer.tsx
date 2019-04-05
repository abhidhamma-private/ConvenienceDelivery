import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { COMPLETE_PHONEVERIFICATION_QUERY } from '../PhoneLogin/PhoneQueries';
import { Mutation, MutationFn } from 'react-apollo';
import { toast } from 'react-toastify';
import { verifyPhone, verifyPhoneVariables } from 'src/types/api';
import VerifyPhonePresenter from './VerifyPhonePresenter';

interface IState {
  verifyNumber: string;
  phoneNumber: string;
}
interface IProps extends RouteComponentProps<any> {}
class VerifyMutation extends Mutation<verifyPhone, verifyPhoneVariables> {}

class PhoneLoginContainer extends React.Component<IProps, IState> {
  public mutation: MutationFn;
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: props.location.state.phone,
      verifyNumber: '',
    };
  }
  public render() {
    const { history } = this.props;
    console.log(this.props);
    console.log(this.state);

    const { verifyNumber, phoneNumber } = this.state;
    console.log('phoneNumber');
    console.log(phoneNumber);

    return (
      <VerifyMutation
        mutation={COMPLETE_PHONEVERIFICATION_QUERY}
        variables={{
          phoneNumber: `${phoneNumber}`,
          key: `${verifyNumber}`,
        }}
        // tslint:disable-next-line
        // tslint:disable-next-line
        onCompleted={data => {
          // tslint:disable-next-line'

          console.log('complete');

          const { CompletePhoneVerification } = data;
          if (CompletePhoneVerification.ok) {
            toast.success('본인확인에 성공했습니다.');
            setTimeout(() => {
              history.push({
                pathname: '/result',
                state: {
                  phoneNumber,
                },
              });
            }, 2000);
          } else {
            toast.error(CompletePhoneVerification.error);
          }
        }}>
        {(mutation, { loading }) => {
          this.mutation = mutation;
          return (
            <VerifyPhonePresenter
              verifyNumber={verifyNumber}
              phoneNumber={phoneNumber}
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
              loading={loading}
            />
          );
        }}
      </VerifyMutation>
    );
  }
  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value,
    } as any);
    console.log(this.state);
  };

  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    console.log('인증뮤테이션시작');

    this.mutation();
  };
}

export default PhoneLoginContainer;
