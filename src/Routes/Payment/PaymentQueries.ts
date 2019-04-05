import gql from 'graphql-tag';

export const SENDORDER_QUERY = gql`
  mutation sendOrder($phoneNumber: String!, $message: String!) {
    SendOrder(phoneNumber: $phoneNumber, message: $message) {
      ok
      error
    }
  }
`;
