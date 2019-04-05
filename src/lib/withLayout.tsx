import React from 'react';
import Header from 'src/Components/Header';

const withLayout = Component =>
  class extends React.Component {
    public render() {
      return (
        <>
          <Header />
          <Component />
        </>
      );
    }
  };
export default withLayout;
