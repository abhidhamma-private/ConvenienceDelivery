import React from 'react';
import PaymentPresenter from './PaymentPresenter';
import { Mutation } from 'react-apollo';
import { SENDORDER_QUERY } from './PaymentQueries';

class PaymentContainer extends React.Component<any> {
  public render() {
    const phoneNumber = this.props.location.state.phoneNumber;
    const message = this.props.location.state.message;
    return (
      <Mutation mutation={SENDORDER_QUERY} variables={{ phoneNumber, message }}>
        {(mutation, { loading }) => {
          return <PaymentPresenter mutation={mutation} />;
        }}
      </Mutation>
    );
  }
}
export default PaymentContainer;
