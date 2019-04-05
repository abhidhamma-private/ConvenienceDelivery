import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { Mutation, MutationFn } from 'react-apollo';
import { START_PHONEVERIFICATION_QUERY } from './PhoneQueries';
import { toast } from 'react-toastify';

interface IState {
  phoneNumber: string;
  countryCode: string;
}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public phoneMutation: MutationFn;
  public state = {
    countryCode: '+82',
    phoneNumber: '',
  };

  public render() {
    const { history } = this.props;
    const { countryCode, phoneNumber } = this.state;

    return (
      <Mutation
        mutation={START_PHONEVERIFICATION_QUERY}
        variables={{ phoneNumber: `${countryCode}${phoneNumber}` }}
        // tslint:disable-next-line
        onCompleted={data => {
          const { StartPhoneVerification } = data;
          const phone = `${countryCode}${phoneNumber}`;
          if (StartPhoneVerification.ok) {
            toast.success('문자가 발송되고있습니다.');
            setTimeout(() => {
              console.log('setTimeout');

              console.log(phone);

              history.push({
                pathname: '/verify-phone',
                state: {
                  phone,
                },
              });
            }, 2000);
          } else {
            toast.error(StartPhoneVerification.error);
          }
        }}>
        {(phoneMutation, { loading }) => {
          this.phoneMutation = phoneMutation;
          return (
            <PhoneLoginPresenter
              children={this.props.children}
              countryCode={countryCode}
              phoneNumber={phoneNumber}
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
              loading={loading}
            />
          );
        }}
      </Mutation>
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
  };
  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    this.phoneMutation();
  };
}

export default PhoneLoginContainer;
