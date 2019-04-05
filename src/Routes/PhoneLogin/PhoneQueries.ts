import { gql } from 'apollo-boost';

export const START_PHONEVERIFICATION_QUERY = gql`
  mutation startPhoneVerification($phoneNumber: String!) {
    StartPhoneVerification(phoneNumber: $phoneNumber) {
      ok
      error
    }
  }
`;

export const COMPLETE_PHONEVERIFICATION_QUERY = gql`
  mutation completePhoneVerification($phoneNumber: String!, $key: String!) {
    CompletePhoneVerification(phoneNumber: $phoneNumber, key: $key) {
      ok
      error
    }
  }
`;
